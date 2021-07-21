import axios from 'axios'
import { observable, makeObservable, action, runInAction } from 'mobx'
import { Badge } from './Badge'

export class Analytics {

    constructor() {
        this.listBadges = []
        this.lengthBadges = 0
        this.TopEmployees = []
        this.SalesBy = {}

        makeObservable(this, {
            listBadges: observable,
            lengthBadges: observable,
            TopEmployees: observable,
            SalesBy: observable,
            updateBadges: action,
            updateSalesby:action
        })
    }

    updateBadges = async () => {
        let res = await axios.get("http://localhost:3001/analytics/badges")
        Object.keys(res.data).forEach(badge =>
            runInAction(() => {
                this.listBadges.push(
                    new Badge(badge, badge, res.data[badge])
                )
            })
        )
    }

    updateTopThreeEmployee = async () => {
        let res = await axios.get("http://localhost:3001/analytics/topThree")
        res.data.forEach(empolyee =>
            runInAction(() => {
                this.TopEmployees.push({ name: empolyee.owner, value: empolyee['count(client.id)'] })
            })
        )
    }
    
    updateSalesby = async () => {
        let res = await axios.get("http://localhost:3001/analytics/salesBy")
        Object.keys(res.data).forEach(category =>
            runInAction(() => {
                //console.log({[category]:res.data[category]})
                this.SalesBy[category] = res.data[category]
            })
        )
        console.log(this.SalesBy[0])
    }
}

