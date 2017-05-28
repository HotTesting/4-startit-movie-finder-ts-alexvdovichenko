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
    public expectedMoviesCategory = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 
           'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
    public moviesCategory = element.all(By.css('a.list-group-item'))   
    public genresTiles = $$('app-genres movie-card h4 a')    
    public EC = protractor.ExpectedConditions
    public URL = ''

    public randomCategory = Math.floor((Math.random() * this.expectedMoviesCategory.length))
    public randomCategoryName = this.expectedMoviesCategory[this.randomCategory]


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

    moviesCategoryIsDisplayed() {
         for (let i = 0; i < this.expectedMoviesCategory.length; ++i) {
          expect(this.moviesCategory.get(i).getText()).toEqual(this.expectedMoviesCategory[i])
    }}

    goToMovieCategory() {
        element(By.linkText(this.randomCategoryName)).click()
        browser.wait(this.EC.visibilityOf(this.genresTiles.first()), 3000)
    }

}    