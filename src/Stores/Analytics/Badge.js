import { observable, makeObservable } from 'mobx'
 
export class Badge {

    constructor(icon,title,value){
        this.title = title
        this.icon = icon
        this.value = value
        
        makeObservable(this, {
                title:observable,
                icon:observable,
                value:observable
          })
    }

}