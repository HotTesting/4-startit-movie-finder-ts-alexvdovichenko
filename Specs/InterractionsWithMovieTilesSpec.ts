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
        movieDetailsPage.goToMoviePage()
        expect(movieDetailsPage.movieTrailerIsDisplayed()).toBeTruthy('Movie trailer should be displayed on the movie details page')
    })

    it('Name of movie category is displayed in URL', ()=> {
        categoriesPage.goToMovieCategory()
        expect(categoriesPage.genreTilesCollection().isDisplayed()).toBeTruthy('Movie tiles for the chosen category should be displayed')
        expect(categoriesPage.EC.urlContains(categoriesPage.randomCategoryName)()).toBeTruthy('URL should contain name of the chosen category')   
//ask Sasha about EC why dont use it here

    })

    it('Check that Visit Movies Website button redirects to movies website', ()=> {
        searchPage.search('Wonder Woman')
        movieDetailsPage.goToMoviePage()
        movieDetailsPage.goToMovieWebsite()
        expect(movieDetailsPage.EC.urlIs('https://www.warnerbros.com/wonder-woman')()).toBeTruthy()
        //не открывать чужой сайт взять атрибут из ссылки и проверить, что есть такая линка хреф 

    })
 
    it('Check the amount of actor tiles displayed', ()=> {
        searchPage.search('Patriots Day')
        movieDetailsPage.goToMoviePage()
        expect(movieDetailsPage.getActorCount()).toEqual(4, 'On movie details page 4 actor tiles should be displayed')

    }) 

    it('Correct actor names are displayed', ()=> {
        searchPage.search('Logan')
        movieDetailsPage.goToMoviePage()
        expect(movieDetailsPage.getActorName()).toEqual([
            {text: 'Hugh Jackman'},
            {text: 'Patrick Stewart'},
            {text: 'Dafne Keen'},
            {text: 'Boyd Holbrook'}
        ]) 
    })

  

}) 