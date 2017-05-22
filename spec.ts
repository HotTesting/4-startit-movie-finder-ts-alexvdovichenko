import {browser, element, By, $, protractor} from 'protractor'

describe('Test', ()=> {
   const URL = 'https://movies-finder.firebaseapp.com/'
   let searchField = element(By.css('input.form-control'))
   let movieTiles = element.all(By.css('movies>.jumbotron+div movie-card'))
   let EC = protractor.ExpectedConditions

    it('"Go" button returns collection of elements ', ()=> {
        browser.get(URL)
        searchField.sendKeys('Logan')
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.wait(EC.visibilityOf(movieTiles.first()), 5000)
        let firstTile = movieTiles.get(0)
        expect(firstTile.getText()).toContain('Logan')

    }) 
    it('Checking that hitting Enter invokes search', ()=> {
        browser.get(URL)
        searchField.sendKeys('Logan', protractor.Key.ENTER)
        browser.wait(EC.visibilityOf(movieTiles.first()), 5000)
        let firstTile = movieTiles.get(0)
        expect(firstTile.getText()).toContain('Logan')

      })

    it('Film name link redirects to watch film page where trailer is', ()=> {
        browser.get(URL)
        searchField.sendKeys('Logan')
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.wait(EC.visibilityOf(movieTiles.first()), 5000)
        element.all(By.css('movies>.jumbotron+div movie-card h4 a')).first().click()
        browser.sleep(3000)
        expect(element(By.css('iframe.embed-responsive-item')).isDisplayed()).toBeTruthy()

    })

   
    it('Popular Series button redirects to Popular Series page', ()=> {
        browser.get(URL)
        element(By.linkText('Popular Series')).click()
        browser.sleep(3000)
        expect(element.all(By.css('app-popular-series div.thumbnail')).isDisplayed()).toBeTruthy()

    })

    it('Upcoming Movies button redirects to the page with Search field', ()=> {
        browser.get(URL)
        element(By.linkText('Upcoming Movies')).click()
        expect(searchField.isDisplayed()).toBeTruthy()

    })

    it('Movies Categories are displayed', ()=> {
        let expected = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 
           'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
        let moviesCategory = element.all(By.css('a.list-group-item'))
        browser.get(URL)
        for (let i = 0; i < expected.length; ++i) {
           expect(moviesCategory.get(i).getText()).toEqual(expected[i]);
        }

    })

    it('Check that name of movie category is displayed in URL', ()=> {
        browser.get(URL)
        element(By.linkText('Action')).click()
        browser.wait(EC.urlContains('Action'),5000)
        expect(EC.urlContains('action')).toBeTruthy()

        })

    it('Check that Visit Movies Website button redirects to movies website', ()=> {
        browser.get(URL)
        searchField.sendKeys('Wonder Woman')
        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
        browser.wait(EC.visibilityOf(movieTiles.first()), 5000)
        element.all(By.css('movies>.jumbotron+div movie-card h4 a')).first().click()
        browser.sleep(2000)
        element(By.linkText('Visit Movies Website')).click()
        browser.sleep(2000)
        expect(EC.urlIs('https://www.warnerbros.com/wonder-woman')).toBeTruthy()

    })
    
    

})

