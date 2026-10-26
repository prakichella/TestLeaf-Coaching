import { test, expect } from "@playwright/test"
import { parse } from "csv-parse/sync"
import fs from "fs"
import path from "path"

type LoginData = {
    tcid: string
    url: string
    username: string
    password: string
}


const csvContent = fs.readFileSync(path.join(__dirname, "../utils/logindata.csv"), "utf-8")
const records: LoginData[] = parse(csvContent, { columns: true, skip_empty_lines: true, trim: true })


test.describe.configure({ mode: "serial" })

test.describe("Salesforce login with CSV data", () => {
    for (const data of records) {
        test(`Salesforce login - ${data.tcid}`, async ({ page }) => {
            await page.goto(data.url)

            
            await page.getByRole("textbox", { name: "Username" }).fill(data.username)
            await page.getByRole("button", { name: "Log In" }).click()
            await page.getByRole("textbox", { name: "Password" }).fill(data.password)
            await page.getByRole("button", { name: "Log In" }).click()

           
            await expect(page).not.toHaveURL(data.url, { timeout: 30000 })
            console.log(`${data.tcid} landed on: ${page.url()}`)
        })
    }
})
