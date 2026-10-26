import { test, expect } from "@playwright/test"
import dotenv from "dotenv"
import path from "path"

const envName = (process.env.envFile || "qa").toLowerCase()

dotenv.config({ path: path.join(__dirname, `../Data/${envName}.env`), override: true, quiet: true })

const appUrl = process.env.APP_URL as string
const username = process.env.USERNAME as string
const password = process.env.PASSWORD as string

test(`Leaftaps login with ${envName} env data`, async ({ page }) => {
    await page.goto(appUrl)

    await page.getByRole("textbox", { name: "Username" }).fill(username)
    await page.getByRole("textbox", { name: "Password" }).fill(password)
    await page.getByRole("button", { name: "Login" }).click()

    await expect(page.getByRole("heading", { name: /Welcome/ })).toBeVisible()
    await expect(page.getByRole("link", { name: "CRM/SFA" })).toBeVisible()
    console.log(`${envName}: logged in as ${username}`)
})
