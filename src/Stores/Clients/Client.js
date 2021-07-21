import { observable, makeObservable } from 'mobx'

export default class Client {

    constructor(client) {
        this.id = client.id
        this.last = client.last
        this.first = client.first
        this.email = client.email
        this.sold = client.sold
        this.date = client.date
        this.email_type = client.email_type != null ? client.email_type : "."
        this.owner = client.owner
        this.country = client.country
        this.owner_id = client.owner_id

        makeObservable(this, {
            id: observable,
            first: observable,
            last: observable,
            sold: observable,
            date: observable,
            email_type: observable,
            owner: observable,
            country:observable,
            owner_id:observable
        })
    }
}

