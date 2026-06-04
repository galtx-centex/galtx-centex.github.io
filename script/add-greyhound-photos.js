fs = require('fs').promises;
path = require('path');
execFileSync = require('child_process').execFileSync;
yaml = require('yamljs');
matter = require('gray-matter');
slugify = require('slugify');

const options = {
    engines: {
        yaml: {
            parse: yaml.parse.bind(yaml),
            stringify: yaml.dump.bind(yaml)
        }
    }
};

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic']);
let imageMagickCommand;

function slug(name) {
    return slugify(name, {lower: true});
}

function assertSafeRelativePath(filePath) {
    if (path.isAbsolute(filePath) || filePath.includes('..')) {
        throw new Error(`Unsafe upload path: ${filePath}`);
    }
    if (!filePath.startsWith(`uploads${path.sep}`) && !filePath.startsWith('uploads/')) {
        throw new Error(`Photo path must be inside uploads/: ${filePath}`);
    }
}

async function exists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function findGreyhoundFile(name) {
    const directPath = path.join('_greyhounds', `${slug(name)}.md`);
    if (await exists(directPath)) {
        return directPath;
    }

    const files = await fs.readdir('_greyhounds');
    const matches = [];
    for (const file of files) {
        if (!file.endsWith('.md')) {
            continue;
        }
        const filePath = path.join('_greyhounds', file);
        const content = await fs.readFile(filePath, {encoding: 'utf8'});
        const info = matter(content, options);
        if (info.data.title && slug(info.data.title) === slug(name)) {
            matches.push(filePath);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }
    if (matches.length > 1) {
        throw new Error(`Multiple greyhound files match "${name}": ${matches.join(', ')}`);
    }
    throw new Error(`Could not find a greyhound named "${name}"`);
}

async function discoverUploads(dogSlug) {
    const uploadDir = path.join('uploads', dogSlug);
    const files = await fs.readdir(uploadDir);
    return files
        .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
        .sort()
        .map((file) => path.join(uploadDir, file));
}

function findImageMagickCommand() {
    if (imageMagickCommand) {
        return imageMagickCommand;
    }

    for (const command of ['magick', 'convert']) {
        try {
            execFileSync(command, ['-version'], {stdio: 'ignore'});
            imageMagickCommand = command;
            return imageMagickCommand;
        } catch {
            // Try the next ImageMagick command name.
        }
    }

    throw new Error('ImageMagick is not installed. Expected either "magick" or "convert".');
}

async function removeExistingImage(name) {
    await fs.rm(path.join('img', name), {force: true});
    await fs.rm(path.join('img', 'thm', name), {force: true});
}

function convertImage(source, destination, size) {
    const args = [source, '-auto-orient'];
    if (size) {
        args.push('-resize', size);
    }
    args.push('-strip', '-quality', '85', destination);
    execFileSync(findImageMagickCommand(), args, {stdio: 'inherit'});
}

function convertThumbnail(source, destination) {
    execFileSync(findImageMagickCommand(), [
        source,
        '-auto-orient',
        '-thumbnail',
        '300x300^',
        '-gravity',
        'center',
        '-extent',
        '300x300',
        '-strip',
        '-quality',
        '85',
        destination
    ], {stdio: 'inherit'});
}

async function processPhoto(uploadPath, dogSlug) {
    await fs.mkdir('img', {recursive: true});
    await fs.mkdir(path.join('img', 'thm'), {recursive: true});

    const imgName = `${dogSlug}.jpg`;
    const imagePath = path.join('img', imgName);
    const thumbnailPath = path.join('img', 'thm', imgName);

    await removeExistingImage(imgName);
    convertImage(uploadPath, imagePath, '1200x1200>');
    convertThumbnail(imagePath, thumbnailPath);
    return imgName;
}

function updateFrontMatter(info, imageName) {
    info.data.pic = imageName;
}

async function cleanupUpload(uploadPath) {
    const dir = path.dirname(uploadPath);
    await fs.rm(uploadPath, {force: true});
    try {
        await fs.rmdir(dir);
    } catch {
        // Directory still contains files, so leave it alone.
    }
}

module.exports = async ({inputs}) => {
    const dogSlug = slug(inputs.name);
    const greyhoundPath = await findGreyhoundFile(inputs.name);
    let uploadPath = inputs.photo && inputs.photo.trim();

    assertSafeRelativePath(uploadPath);
    if (!imageExtensions.has(path.extname(uploadPath).toLowerCase())) {
        throw new Error(`Unsupported image extension: ${uploadPath}`);
    }
    if (!await exists(uploadPath)) {
        throw new Error(`Upload does not exist: ${uploadPath}`);
    }

    const content = await fs.readFile(greyhoundPath, {encoding: 'utf8'});
    const info = matter(content, options);
    const imageName = await processPhoto(uploadPath, dogSlug);

    updateFrontMatter(info, imageName);

    const data = matter.stringify(info.content, info.data, options);
    await fs.writeFile(greyhoundPath, data);
    await cleanupUpload(uploadPath);

    return `Adding photo for ${info.data.title || inputs.name}`;
}
