import { browser, element, By, $, $$ } from 'protractor'

export class BasePage {
    public URL = 'https://movies-finder.firebaseapp.com/'

    open() {
        browser.get(this.URL)
    }
}