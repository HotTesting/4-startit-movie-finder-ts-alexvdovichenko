import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class CategoriesPage extends BasePage {
    public genresTiles = $$('app-genres movie-card h4 a') 
    public randomCategory = Math.floor((Math.random() * this.expectedMoviesCategory.length))
    public randomCategoryName = this.expectedMoviesCategory[this.randomCategory]

/// method returns promise of movie tiles of specific genre
    genreTilesCollection() {
        return this.genresTiles
    }
///method for selection and navigation to a random movie category page
     goToMovieCategory() {
        element(By.linkText(this.randomCategoryName)).click()
        browser.wait(this.EC.visibilityOf(this.genresTiles.first()), 3000)
    }

    getCurrectUrl() {
        return browser.getCurrentUrl()
    }
}
