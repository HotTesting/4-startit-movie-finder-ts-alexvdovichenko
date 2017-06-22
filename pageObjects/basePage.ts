import { browser, element, By, $, $$, protractor } from 'protractor'

export class BasePage {
    public URL = browser.baseUrl
    public EC = protractor.ExpectedConditions
    public moviesCategory = element.all(By.css('a.list-group-item')) 
    public expectedMoviesCategory = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 
           'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
    public movieNameLink = $$('movies>.jumbotron+div movie-card h4 a') ///Movie name link from Search Results
    public popularSeriesTiles = $$('app-popular-series h4 a') ///collection of movie tiles on Popular series page
    public upcomingMoviesTiles = $$('app-upcoming movie-card h4 a') ///collection of movie tiles on Upcoming movies page
            
    open() {
        browser.get(this.URL)
    }
}