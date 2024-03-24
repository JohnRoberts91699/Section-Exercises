const fs = require('fs');
const axios = require('axios');

const filename = process.argv[2];

if (!filename) {
    console.error('Erroe: Please provide the filename as a command-line argument.');
    process.exit(1);
}

try {
    const urls = fs.readFileSync(filename, 'utf8').split('\n').filter(url => url.trim() !== '');

    utls.forEach(async (url) => {
        try {
            const response = await axios.get(url);
            const { data } = response;
            const hostname = new URL(url).hostname;
            const outputFilename = `${hostname}.html`;
            fs.writeFileSync(outputFilename, data);
            console.log(`Wrote HTML content to ${outputFilename}`);
        } catch (error) {
            console.error(`Error downloading ${url}: ${error.message}`);
        }
    });
} catch (error) {
    console.error(`Error reading file ${filename}: ${error.message}`);
}