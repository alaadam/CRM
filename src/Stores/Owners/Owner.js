import { observable, makeObservable } from 'mobx'

export class Owner {

    constructor(id,owner) {
        this.id = id
        this.owner = owner

        makeObservable(this, {
            id: observable,
            owner: observable
        })
    }
}