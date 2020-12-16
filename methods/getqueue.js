const scrape = require('website-scraper');
const fs = require('fs');
const rimraf = require('rimraf');

module.exports = function() {
    return new Promise(async function(resolve, reject) {
        rimraf.sync('./queuescrape');
        const queue = await scrape({ urls: ['https://bots.discordlabs.org/queue'], directory: './queuescrape/' });
        resolve(queue);
    });
}