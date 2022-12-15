const puppeteer = require('puppeteer');
const url = 'https://www.bmwusa.com/certified-preowned-search.html#/results';

const type = async (page, selector, text) => {
    const el = await page.waitForSelector(selector);
    await el.focus();
    await el.type(text, { delay: 100 });
};

const getKey = async () => {
    let auth = '';
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '--disable-site-isolation-trials',
            '--disable-features=BlockInsecurePrivateNetworkRequests.',
        ]
    });
    
    const [page] = await browser.pages();
    await page.setRequestInterception(true);
    page.on('request', async (request) => {
        const url = request.url();
        if (url.endsWith('vehicle')) {
            auth = request.headers().authorization;
        }
        request.continue();
    });

    await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 45000
    })
    await type(page, '#zip-input-cpo', '84045');
    const go = await page.$('button.cta-button');
    await go.click();

    setTimeout(() => {
        browser.close();
    }, 5000);
    
    return new Promise(resolve => setTimeout(() => {
        browser.close();
        resolve(auth);
    }, 5000));
}

module.exports = getKey;