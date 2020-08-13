import {BpData} from './bp-data';
export class BpCover {
    constructor(
        private bpData:BpData,
        private href:String
    ){}

    getHref(){
        return this.href;
    }

    getBp(){
        return this.bpData;
    }
}
