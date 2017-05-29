import {browser, element, By, $, protractor} from 'protractor'
import { SearchPage } from '../pageObjects/searchPage'
import { MovieDetailsPage } from '../pageObjects/movieDetailsPage'
import { CategoriesPage } from '../pageObjects/categoriesPage'

describe('Actions with movieTiles:', ()=> {
   let searchPage = new SearchPage()
   let movieDetailsPage = new MovieDetailsPage()
   let categoriesPage = new CategoriesPage()

    beforeEach(()=> {
        searchPage.open()
    })

    afterEach(()=> {
        browser.manage().deleteAllCookies()
    })

    it('Film name redirects to watch film page where trailer is', ()=> {
        searchPage.search('Sing')
        searchPage.goToMoviePage()
        expect(movieDetailsPage.movieTrailerIsDisplayed()).toBeTruthy('Movie trailer should be displayed on the movie details page')
    })

    it('Name of movie category is displayed in URL', ()=> {
        categoriesPage.goToMovieCategory()
        expect(categoriesPage.genreTilesAreDisplayed()).toBeTruthy('Movie tiles for the chosen category should be displayed')
        expect(categoriesPage.EC.urlContains(categoriesPage.randomCategoryName)).toBeTruthy('URL should contain name of the chosen category')   

    })

    it('Check that Visit Movies Website button redirects to movies website', ()=> {
        searchPage.search('Wonder Woman')
        searchPage.goToMoviePage()
        movieDetailsPage.goToMovieWebsite()
        expect(movieDetailsPage.EC.urlIs('https://www.warnerbros.com/wonder-woman')).toBeTruthy()

    })    

})    