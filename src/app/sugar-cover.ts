import {SugarData } from './sugar-data';
export class SugarCover {
    constructor(
        private sugarData:SugarData,
        private href:String
    ){}

    getHref(){
        return this.href;
    }

    getSugar(){
        return this.sugarData;
    }
}
