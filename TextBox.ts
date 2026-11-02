class TextBox {

    // overload signatures
    fill(text: string): void;
    fill(text: string, locator: string): void;

    // single implementation - locator is optional so it handles both signatures
    fill(text: string, locator?: string): void {
        if (locator) {
            console.log(`Fill "${text}" in the textbox located by ${locator}`);
        } else {
            console.log(`Fill "${text}" in the default textbox`);
        }
    }
}

// create object for the class
let textBox = new TextBox();
textBox.fill("testleaf");
textBox.fill("testleaf", "#username");
