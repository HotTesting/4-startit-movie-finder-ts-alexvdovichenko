import {browser, element, By, $, protractor} from 'protractor'
import { SearchPage } from './pageObjects/searchPage'
import { MovieDetailsPage } from './pageObjects/movieDetailsPage'

describe('Search Page:', ()=> {
   let searchPage = new SearchPage()
   let movieDetailsPage = new MovieDetailsPage()

    beforeEach(()=> {
        searchPage.open()
    })

    afterEach(()=> {
        browser.manage().deleteAllCookies()
    })

    it('Search field should have correct placeholder text', ()=> {
        expect(searchPage.getSearchFieldPlaceholder()).toEqual('Search for movies...', 'Placeholder should have correct text displayed')
    })
    
    it('Search should return collection of movie tiles that match the search query', ()=> {
        searchPage.search('Logan')
        expect(searchPage.movieTiles.count()).toBeGreaterThan(0, 'Search results should not be empty')
        let firstTile = searchPage.movieTiles.get(0)
        expect(firstTile.getText()).toContain('Logan', 'First movie tile should have text from the search query')

    }) 
    it('Search with "Enter" works correctly', ()=> {
        searchPage.searchWithEnter('Arrival')
        expect(searchPage.movieTiles.count()).toBeGreaterThan(0, 'Search results should not be empty')
        let firstTile = searchPage.movieTiles.get(0)
        expect(firstTile.getText()).toContain('Arrival', 'First movie tile should have text from the search query')

      })

    it('Search with invalid name doesnt return movie tiles', ()=> {
        searchPage.searchInvalidText('qwertyasdrfg2345')
        expect(searchPage.movieTiles.count()).not.toBeGreaterThan(0, 'No results should be shown for invalid search')
    })  

    it('Film name redirects to watch film page where trailer is', ()=> {
        searchPage.search('Sing')
        searchPage.goToMoviePage()
        expect(movieDetailsPage.movieSneakPeek.isDisplayed()).toBeTruthy('Movie trailer should be displayed on the movie details page')
    })

   
    it('Popular Series button redirects to Popular Series page', ()=> {
        searchPage.goToPopularSeries()
        expect(searchPage.popularSeriesTiles.isDisplayed()).toBeTruthy('Movie tiles with popular series should be displayed')

    })

    it('Upcoming Movies button redirects to the page with Search field', ()=> {
        searchPage.goToUpcomingMovies()
        expect(searchPage.upcomingMoviesTiles.isDisplayed()).toBeTruthy('Movie tiles with upcoming movies should be displayed')
    })

    it('Movie Categories are displayed', ()=> {
       searchPage.moviesCategoryIsDisplayed()
    })

    it('Name of movie category is displayed in URL', ()=> {
        searchPage.goToMovieCategory()
        expect(searchPage.genresTiles.isDisplayed()).toBeTruthy('Movie tiles for the chosen category should be displayed')
        expect(searchPage.EC.urlContains(searchPage.randomCategoryName)).toBeTruthy('URL should contain name of the chosen category')   

    })

    it('Check that Visit Movies Website button redirects to movies website', ()=> {
        searchPage.search('Wonder Woman')
        searchPage.goToMoviePage()
        movieDetailsPage.visitMovieWebsiteButton.click()
        browser.sleep(2000)
        expect(movieDetailsPage.EC.urlIs('https://www.warnerbros.com/wonder-woman')).toBeTruthy()

    })    

})

