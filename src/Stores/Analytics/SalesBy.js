import { observable, makeObservable } from 'mobx'
 
export class SalesBy {

    constructor(){
        this.emails = []
        this.countries = []
        this.months = []
        this.owners = []

        makeObservable(this, {
            emails:observable,
            countries:observable,
            months:observable,
            owners:observable,
          })
    }

}
