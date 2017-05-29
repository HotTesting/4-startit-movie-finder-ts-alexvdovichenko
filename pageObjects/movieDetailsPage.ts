import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class MovieDetailsPage extends BasePage {
    public movieSneakPeek = $('iframe.embed-responsive-item')
    public similarMovies = $$('app-movie movie-card h4 a')
    public visitMovieWebsiteButton = element(By.linkText('Visit Movies Website'))

    goToMovieWebsite() {
        this.visitMovieWebsiteButton.click()
        browser.sleep(2000)
    }

    movieTrailerIsDisplayed() {
       return this.movieSneakPeek.isDisplayed()
    }
}