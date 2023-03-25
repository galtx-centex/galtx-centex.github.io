fs = require('fs').promises;
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
    const greyhound = slugify(inputs.name, { lower: true });
    const filePath = `_greyhounds/${greyhound}.md`;

    // Create greyhound data
    const info = {
        content: inputs.summary,
        data: {
            layout: 'greyhound',
            date: nowDate(),
            category: 'available',
            title: capitalize(inputs.name),
            color: inputs.color,
            sex: inputs.sex,
            dob: thisDate(inputs.dob),
        }
    };

    // Save greyhound data
    const data = matter.stringify(info.content, info.data, options);
    await fs.writeFile(filePath, data);
    console.log(`Saved ${filePath}`);

    return `Adding ${info.data.title} to Available Hounds! 🌟`;
}
