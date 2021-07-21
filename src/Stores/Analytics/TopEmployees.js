import { observable, makeObservable } from 'mobx'
 
export class TopEmployees {

    constructor(employees){
        this.first = {name:employees.first.name,value:employees.first.value}
        this.second = {name:employees.second.name,value:employees.second.value}
        this.third = {name:employees.third.name,value:employees.third.value}


        makeObservable(this, {
            first:observable,
            second:observable,
            third:observable
          })
    }

}
