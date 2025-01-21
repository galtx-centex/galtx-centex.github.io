existsSync = require('fs').existsSync;
writeFile = require('fs').promises.writeFile;
yaml = require('yamljs');
matter = require('gray-matter');
slugify = require('slugify');
capitalize = require('capitalize');

const options = {
    engines: {
        yaml: {
            parse: yaml.parse.bind(yaml),
            stringify: yaml.dump.bind(yaml)
        }
    }
};

function nowDate() {
    const now = new Date();
    return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function thisDate(dateString) {
    // mm/dd/yyyy
    const dateRegex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
    const match = dateRegex.exec(dateString);
    const month = parseInt(match[1], 10);
    const day = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);
    return new Date(year, month - 1, day);
}

module.exports = async ({github, context, core, inputs}) => {
    // Create greyhound data
    const info = {
        content: inputs.summary ??= "",
        data: {
            layout: 'greyhound',
            date: nowDate(),
            category: 'comingsoon',
            title: capitalize(inputs.name),
            color: inputs.color,
            sex: inputs.sex,
            dob: thisDate(inputs.dob),
        }
    };

    // Create a unique file path to avoid overwriting an existing greyhound's data
    const greyhound = slugify(inputs.name, { lower: true });

    let count = 1;
    let nameId = greyhound;
    let filePath = `_greyhounds/${nameId}.md`;
    while (existsSync(filePath)) {
        count += 1;
        nameId = greyhound + count;
        filePath = `_greyhounds/${nameId}.md`;
    }

    // Save greyhound data
    const data = matter.stringify(info.content, info.data, options);
    await writeFile(filePath, data);
    console.log(`Saved ${filePath}`);

    return `Adding ${info.data.title} to Greyhounds as ${nameId}! 🌟`;
}
