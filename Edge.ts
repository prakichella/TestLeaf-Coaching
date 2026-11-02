import { Browser } from "./Browser.ts";

// Child class - inherits browserType() and browserVersion() from Browser
class Edge extends Browser {

    launchBrowser() {
        console.log("Launch the Edge browser");
    }
}

// create object for the class
let edge = new Edge();
edge.browserType();
edge.browserVersion();
edge.launchBrowser();
