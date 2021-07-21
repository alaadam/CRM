/* eslint-disable */
import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"
import Client from './Client'

export class Clients {

    constructor() {
        this.list = []
        this.length = 0
        this.index = 0
       
        makeObservable(this, {
            index : observable,
            list: observable,
            length: observable,
            addClient: action,
            updatePersonalInfo: action,
            updateOwnership: action, 
            updateEmailType: action,
            updateSale: action,
            saleStatus:action,
            increaseIndex:action,
            decreaseIndex:action,
            updateListOfClients:action,
            emptyTheList:action
          })
    }

    increaseIndex = () =>{
        this.index += 1
        this.updateListOfClients()
    }

    decreaseIndex = () =>{
        if(this.index > 0){
            this.index -= 1
            this.updateListOfClients()
        }
    }

    emptyTheList = () => {
        this.list = []
    }

    increaseLength=()=>{
        console.log("blop")
        this.length++;
    }

    saleStatus = (first ,last) =>{
        let res = (this.list.filter(client => client.first === first && client.last === last))
        return res[0] ? res[0].sold : undefined
    } 

    updateListOfClients = async () => {
        let res = await axios.get(`http://localhost:3001/clients/?offset=${20*this.index}`)
        this.emptyTheList()
        res.data.forEach(client => {
            runInAction(()=>{
                this.list.push(new Client(client))
            })
        });
    }
    printList = () => {console.log(this.list)}

    addClient = async (newClient) => {

        await axios.post("http://localhost:3001/clients", newClient)
        this.updateListOfClients()
    }

    updatePersonalInfo = async (id,newInfo) => {
        await axios.put("http://localhost:3001/clients/personalInfo", {id,newInfo})
        this.updateListOfClients()
    }

    updateOwnership = async (first,last,owner) => {
        await axios.put("http://localhost:3001/clients/ownership", {first,last ,owner})
        this.updateListOfClients()
    }

    updateEmailType = async (first,last,emailType) => {

        await axios.put("http://localhost:3001/clients/emailType", {first,last ,emailType})
        this.updateListOfClients()
    }

    updateSale = async (first,last) => {
        await axios.put("http://localhost:3001/clients/sale", {first,last ,sold:true})
        this.updateListOfClients()
    }

}

