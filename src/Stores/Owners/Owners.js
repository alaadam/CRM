/* eslint-disable */
import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"

import { Owner } from './Owner'

export class Owners {

    constructor() {
        this.list = []
        this.length = 0

        makeObservable(this, {
            list: observable,
            length: observable,
            getOwners: action
        })

    }

    getOwners = async () => {
        let res = await axios.get(`http://localhost:3001/owners`)
        this.list = []

        res.data.forEach(owner => {
            runInAction(() => {
                this.list.push(new Owner(owner.id,owner.owner))
            })
        });
    }
}

