fs = require('fs').promises;
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

function nowDate() {
    const now = new Date();
    return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function update(data, inputs) {
    switch (inputs.status) {
        case 'available':
            return available(data, inputs);
        case 'pending':
            return pending(data, inputs);
        case 'adopted':
            return adopted(data, inputs);
        case 'medicalhold':
            return meicaldhold(data, inputs);
        case 'permafoster':
            return permafoster(data, inputs);
        case 'deceased':
            return deceased(data, inputs);
        default:
            throw `unknown status ${inputs.status}`;
    }
}

function checkDeceased(data) {
    if (data.category === 'deceased') {
        throw `${data.title} has already crossed the Rainbow Bridge 😢`;
    }
}
function checkAdopted(data) {
    if (data.category === 'adopted') {
        throw `${data.title} has already been adopted 😝`;
    }
}
function checkPending(data) {
    if (data.pending) {
        throw `${data.title} is already pending adoption 😝`;
    }
}
function checkPermafoster(data) {
    if (data.permafoster) {
        throw `${data.title} is a permanent foster 😕`;
    }
}
function checkMedicalhold(data) {
    if (data.medicalhold) {
        throw `${data.title} is already in medical hold 🤕`;
    }
}

function available(data, inputs) {
    checkDeceased(data);
    data.category = 'available';
    data.pending = false;
    data.medicalhold = false;
    data.permafoster = false;
    return `${data.title} is Available! 🌟`;
}

function pending(data, inputs) {
    checkDeceased(data);
    checkAdopted(data);
    checkPending(data);
    data.pending = true;
    return `${data.title} is Pending Adoption! 🎉`;
}

function adopted(data, inputs) {
    checkDeceased(data);
    checkAdopted(data);
    data.category = 'adopted';
    data.doa = nowDate();
    return `${data.title} has been Adopted! 💗`;
}

function medicalhold(data, inputs) {
    checkDeceased(data);
    checkAdopted(data);
    checkPermafoster(data);
    checkPending(data);
    checkMedicalhold(data);
    data.medicalhold = true;
    return `${data.title} is in Medical Hold 🤕`;
}

function permafoster(data, inputs) {
    checkDeceased(data);
    checkAdopted(data);
    checkPermafoster(data);
    data.permafoster = true;
    return `${data.title} is a Permanent Foster 💜`;
}

function deceased(data, inputs) {
    checkDeceased(data);
    data.category = 'deceased';
    data.dod = nowDate();
    return `${data.title} has crossed the Rainbow Bridge 😢`;
}

module.exports = async ({github, context, core, inputs}) => {
    const greyhound = slugify(inputs.name, {lower: true});
    const filePath = `_greyhounds/${greyhound}.md`;

    // Load greyhound data
    const content = await fs.readFile(filePath, {encoding: 'utf8'});
    var info = matter(content, options);
    console.log(`Loaded ${filePath}`);

    // Update greyhound
    var message = update(info.data, inputs);
    console.log(message);

    // Save greyhound data
    const data = matter.stringify(info.content, info.data, options);
    await fs.writeFile(filePath, data);
    console.log(`Saved ${filePath}`);

    return message;
}
