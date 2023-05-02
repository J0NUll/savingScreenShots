

import Page from './page.js';




class Dynamic_Load extends Page {

    get strtBttn () {
        return $('#start > button');

    }


    get header4 () {
        return $('#content > div > h4')

    }




    open () {
        return super.open('dynamic_loading/2');
    }
}

export default new Dynamic_Load();
