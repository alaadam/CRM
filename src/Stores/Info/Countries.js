/* eslint-disable */
import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"


export class Countries {

    constructor() {
        this.list = []
        this.length = 0

        makeObservable(this, {
            list: observable,
            length: observable,
            updateListOfCountries: action
        })
    }
    
    updateListOfCountries = async () => {
        let res = await axios.get(`http://localhost:3001/countries`)
        res.data.forEach(country => {
            runInAction(() => {
                this.list.push(country)
            })
        });
    }

}

