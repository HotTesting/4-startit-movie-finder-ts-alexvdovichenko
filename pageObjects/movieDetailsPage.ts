import { browser, element, By, $, $$, protractor } from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'

export class MovieDetailsPage extends SearchPage {
    public movieSneakPeek = $('iframe.embed-responsive-item')
    public similarMovies = $$('app-movie movie-card h4 a')
    public visitMovieWebsiteButton = element(By.linkText('Visit Movies Website'))
}