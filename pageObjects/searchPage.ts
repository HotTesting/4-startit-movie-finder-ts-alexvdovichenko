import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class SearchPage extends BasePage {
    public movieTiles = $$('movies>.jumbotron+div movie-card')
    public searchField = $('input.form-control')
    public goButton = $('span.input-group-btn button.btn.btn-primary')
    public popularSeriesLink = element(By.linkText('Popular Series'))
    public upcomingMoviesLink = element(By.linkText('Upcoming Movies'))
    public URL = ''

/// method for searching movies with Go button
    search(text) {
        this.searchField.sendKeys(text)
        this.goButton.click()
        browser.wait(this.EC.visibilityOf(this.movieTiles.first()), 3000)
    }
/// method for searching movies with Enter button
    searchWithEnter(text) {
        this.searchField.sendKeys(text, protractor.Key.ENTER)
        browser.wait(this.EC.visibilityOf(this.movieTiles.first()), 3000)
    }
/// method for checking search with incorrect data
    searchInvalidText(text) {
        this.searchField.sendKeys(text, protractor.Key.ENTER)
    }
/// returns Search field placeholder
    getSearchFieldPlaceholder() {
        return this.searchField.getAttribute('placeholder')
    }
/// navigation to Popular series page
    goToPopularSeries() {
        this.popularSeriesLink.click()
        browser.wait(this.EC.visibilityOf(this.popularSeriesTiles.first()), 3000)
    }
/// navigation to Upcoming movies page
    goToUpcomingMovies() {
        this.upcomingMoviesLink.click()
        browser.wait(this.EC.visibilityOf(this.upcomingMoviesTiles.first()), 3000)
    }

///returns array of movie categories names
    getExpectedMovieCategories() {
        return this.expectedMoviesCategory
    }

///returns promise with movie categories
    getMoviesCategoryTitles() {
        return this.moviesCategory
    }  

///returns amount of tiles in collection
    getTilesCount() {
      return this.popularSeriesTiles.count();
    }
}   