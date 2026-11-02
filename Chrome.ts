import { Browser } from "./Browser.ts";

// Child class - inherits browserType() and browserVersion() from Browser
class Chrome extends Browser {

    launchBrowser() {
        console.log("Launch the Chrome browser");
    }
}

// create object for the class
let chrome = new Chrome();
chrome.browserType();
chrome.browserVersion();
chrome.launchBrowser();
