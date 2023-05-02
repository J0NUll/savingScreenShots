import Dynamic_Load from '../pageobjects/dynamic_loading.page.js'



describe('Dynamic Load page Test ', () => {
    xit('Open the webpage', async () => {
        await Dynamic_Load.open()

        await browser.pause(3000)
                

        
    })



    it('Take a screenshot', async () => {
        await Dynamic_Load.open() 

        await browser.pause(3000)
        await browser.saveScreenshot('/Users/mcm-mac-17/Desktop/Josh/savingScreenShots/test/images_1.png')
        await browser.pause (3000)
        await (Dynamic_Load).strtBttn.click()
        await browser.pause (3000)
        await expect (Dynamic_Load.header4).toHaveText('Example 2: Element rendered after the fact')
        await browser.pause (3000)
        await browser.saveScreenshot('/Users/mcm-mac-17/Desktop/Josh/savingScreenShots/test/images_2.png')

        



    })
})


