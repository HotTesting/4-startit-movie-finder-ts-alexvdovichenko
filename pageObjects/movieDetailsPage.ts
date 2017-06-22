import { browser, element, By, $, $$, protractor } from 'protractor'
import { BasePage } from './basePage'

export class MovieDetailsPage extends BasePage {
    public movieSneakPeek = $('iframe.embed-responsive-item')
    public similarMovies = $$('app-movie movie-card h4 a')
    public visitMovieWebsiteButton = element(By.linkText('Visit Movies Website'))
    public actorTiles = $$('.row.is-flex a[href^="/actor/"]')

    /// method for redirection to external movie website page
    goToMovieWebsite() {
        this.visitMovieWebsiteButton.click()
        browser.sleep(2000)
    }

    ///method for redirection to movie details page
    goToMoviePage() {
        this.movieNameLink.first().click()
        browser.wait(this.EC.visibilityOf(this.movieSneakPeek), 3000)
    }

    movieTrailerIsDisplayed() {
       return this.movieSneakPeek.isDisplayed()
    }

    ///redirection to actor details page
    getActorName() {
        return this.actorTiles.map(function(elem) {
            return {text: elem.getText()}
        })
    }

    ///get count of actor tiles
    getActorCount() {
        return this.actorTiles.count();
    }
}