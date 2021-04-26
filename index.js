const puppeteer = require('puppeteer');
const url = "https://livescore.soccersapi.com/match/fulham-arsenal-fc/1170458#load=2";
const Screenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // await page.evaluate(() => {
    //     let elements = document.getElementsByClassName('showGoals');
    //     for (let element of elements)
    //         element.click();
    // });


    await page.waitForSelector('#ui-id-6 > div.events > div:nth-child(1) > div > div.field > div > div.home');
    const logo = await page.$('#ui-id-6 > div.events > div:nth-child(1) > div > div.field > div > div.home');
    await logo.screenshot({
        path: 'test.png',

    });
    await page.close();
    await browser.close();
}
Screenshot();

// const {Builder, By, Key, until} = require('selenium-webdriver');
//
// (async function example() {
//     let driver = await new Builder().forBrowser('firefox').build();
//     try {
//         await driver.get('https://livescore.soccersapi.com/match/fulham-arsenal-fc/1170458#load=2');
//         await driver.findElement(By.css('#ui-id-6 > div.events > div:nth-child(1) > div > div.field')).sendKeys('webdriver', Key.RETURN);
//         await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//         driver.takeScreenshot().then(
//             function(image, err) {
//                 require('fs').writeFile('out.png', image, 'base64', function(err) {
//                     console.log(err);
//                 });
//             }
//         );
//     } finally {
//         await driver.quit();
//     }
// })();


// https://livescore.soccersapi.com/match/thailand-u23-iraq-u23/88967
// https://livescore.soccersapi.com/match/australia-u23-bahrain-u23/88966
// https://livescore.soccersapi.com/match/china-u23-iran-u23/88969
// https://livescore.soccersapi.com/teams/uzbekistan-u23/7355
// https://livescore.soccersapi.com/match/qatar-u23-japan-u23/88971
// https://livescore.soccersapi.com/match/saudi-arabia-u23-iran-u23/85129
// https://livescore.soccersapi.com/teams/vietnam-u23/7357
// https://livescore.soccersapi.com/teams/jordan-u23/7605
// https://livescore.soccersapi.com/teams/saudi-arabia-u23/7367
// https://livescore.soccersapi.com/teams/australia-u23/7599
// https://livescore.soccersapi.com/teams/republic-of-korea-u23/7373
// https://livescore.soccersapi.com/teams/united-arab-emirates-u23/7361
// https://livescore.soccersapi.com/teams/saudi-arabia-u23/7367
// https://livescore.soccersapi.com/teams/australia-u23/7599
// https://livescore.soccersapi.com/teams/australia-u23/7599
// https://livescore.soccersapi.com/teams/republic-of-korea-u23/7373