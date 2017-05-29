import { browser, element, By, $, $$, protractor } from 'protractor'

export class BasePage {
    public URL = browser.baseUrl
    public EC = protractor.ExpectedConditions
    public moviesCategory = element.all(By.css('a.list-group-item')) 
    public expectedMoviesCategory = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 
           'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
           
    open() {
        browser.get(this.URL)
    }
}