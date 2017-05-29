import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class SearchPage extends BasePage {
    public movieTiles = $$('movies>.jumbotron+div movie-card')
    public searchField = $('input.form-control')
    public goButton = $('span.input-group-btn button.btn.btn-primary')
    public movieNameLink = $$('movies>.jumbotron+div movie-card h4 a')
    public popularSeriesLink = element(By.linkText('Popular Series'))
    public popularSeriesTiles = $$('app-popular-series h4 a')
    public upcomingMoviesLink = element(By.linkText('Upcoming Movies'))
    public upcomingMoviesTiles = $$('app-upcoming movie-card h4 a') 
    public URL = ''

    search(text) {
        this.searchField.sendKeys(text)
        this.goButton.click()
        browser.wait(this.EC.visibilityOf(this.movieTiles.first()), 3000)
    }

    searchWithEnter(text) {
        this.searchField.sendKeys(text, protractor.Key.ENTER)
        browser.wait(this.EC.visibilityOf(this.movieTiles.first()), 3000)
    }

    searchInvalidText(text) {
        this.searchField.sendKeys(text, protractor.Key.ENTER)
    }

    getSearchFieldPlaceholder() {
        return this.searchField.getAttribute('placeholder')
    }

    goToMoviePage() {
        this.movieNameLink.first().click()
        browser.sleep(2000)
    }

    goToPopularSeries() {
        this.popularSeriesLink.click()
        browser.wait(this.EC.visibilityOf(this.popularSeriesTiles.first()), 3000)
    }

    goToUpcomingMovies() {
        this.upcomingMoviesLink.click()
        browser.wait(this.EC.visibilityOf(this.upcomingMoviesTiles.first()), 3000)
    }

   /* moviesCategoryIsDisplayed() {
         for (let i = 0; i < this.expectedMoviesCategory.length; ++i) {
          this.moviesCategory.get(i).getText().then(function(text){
            expect(text).toEqual(this.expectedMoviesCategory[i])
          })
    }}*/
    getExpectedMovieCategories() {
        return this.expectedMoviesCategory
    }

    getMoviesCategoryTitles() {
        return this.moviesCategory
    }  

}   