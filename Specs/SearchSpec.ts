import {browser, element, By, $, protractor} from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'
import { MovieDetailsPage } from '../pageObjects/movieDetailsPage'

describe('Search Page:', ()=> {
   let searchPage = new SearchPage()
   let movieDetailsPage = new MovieDetailsPage()

    beforeEach(()=> {
        searchPage.open()
    })

    afterEach(()=> {
        browser.manage().deleteAllCookies()
    })

    it('Search field has correct placeholder text', ()=> {
        expect(searchPage.getSearchFieldPlaceholder()).toEqual('Search for movies...', 'Placeholder should have correct text displayed')
    })
    
    it('Search returns collection of movie tiles that match the search query', ()=> {
        searchPage.search('Logan')
        expect(searchPage.movieTiles.count()).toBeGreaterThan(0, 'Search results should not be empty')
        let firstTile = searchPage.movieTiles.first()
        expect(firstTile.getText()).toContain('Logan', 'First movie tile should have text from the search query')

    }) 
    it('Search with "Enter" works correctly', ()=> {
        searchPage.searchWithEnter('Arrival')
        expect(searchPage.movieTiles.count()).toBeGreaterThan(0, 'Search results should not be empty')
        let firstTile = searchPage.movieTiles.get(0)
        expect(firstTile.getText()).toContain('Arrival', 'First movie tile should have text from the search query')

      })

    it('Search with invalid name doesn\'t return movie tiles', ()=> {
        searchPage.searchInvalidText('qwertyasdrfg2345')
        expect(searchPage.movieTiles.count()).toBe(0, 'No results should be shown for invalid search')

    })  
   
    it('Movie tile has name, release date and rating displayed', ()=> {
        
    })

    it('Popular Series page has 20 tiles displayed', ()=> {
        searchPage.goToPopularSeries()
        expect(searchPage.getTilesCount()).toEqual(20, '20 Movie tiles with popular series should be displayed')

        //use each or mqap  check data in collection  
// let answer;
//         searchPage.getTilesCount()  - Promise
//         searchPage.getTilesCount().then (function(promisevalue) {
//             answer = promisevalue;
//         })

    })

    it('', ()=> {
        searchPage.goToUpcomingMovies()
        let allPromises = searchPage.upcomingMoviesTiles.map(moviecard=>{
            return moviecard.$('h4 a').isDisplayed();
        });
        expect(allPromises.then(arr=>{return arr.length})).not.toBe(0)
        expect(allPromises).not.toContain(false)
       // expect(searchPage.upcomingMoviesTiles.isDisplayed()).toBeTruthy('Movie tiles with upcoming movies should be displayed')
       ///searchPage.popularSeriesTiles.isDisplayed().then((arr)=> {console.log('###', arr)})
    })

    it('Movie Categories are displayed', ()=> {
        let expectedMoviesCategory = searchPage.getExpectedMovieCategories()
        let actualMoviesCategory =  searchPage.getMoviesCategoryTitles()
        actualMoviesCategory.each((element, index) => 
            expect(actualMoviesCategory.getText()).toEqual(expectedMoviesCategory[index]))
            //element.getText().then(text => expect(text).toEqual(expectedMoviesCategory[index])))

     })

    

})

