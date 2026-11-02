// Parent class
class Browser {

    browserVersion() {
        console.log("Browser version: unknown");
    }
}

// Child class - replaces the parent's browserVersion() with its own
class Chrome extends Browser {

    override browserVersion() {
        console.log("Chrome browser version: 150");
    }
}

// create objects for the classes
let browser = new Browser();
browser.browserVersion();

let chrome = new Chrome();
chrome.browserVersion();
