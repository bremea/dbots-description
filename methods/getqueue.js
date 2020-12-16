const scrape = require('website-scraper');
const fs = require('fs');
const HTMLParser = require('node-html-parser');
const rimraf = require('rimraf');

module.exports = function() {
    return new Promise(async function(resolve, reject) {
        rimraf.sync('./queuescrape');
        await scrape({ urls: ['https://bots.discordlabs.org/queue'], directory: './queuescrape/', maxDepth: 1 });
        const queue = fs.readFileSync('./queuescrape/index.html');
        const root = HTMLParser.parse(queue);
        const rows = root.querySelectorAll('tr');
        let botids = [];
        for (const g of rows) {
            botids.push(g.getAttribute('id'));
        }
        botids.splice(0, 1);
        resolve(botids);
    });
}