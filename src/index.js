import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Clients } from './Stores/Clients/Clients'
import { Owners } from './Stores/Owners/Owners'

import { Countries } from './Stores/Info/Countries'

import { Analytics } from './Stores/Analytics/Analytics'
import { TopEmployees } from './Stores/Analytics/TopEmployees'
import { SalesBy } from './Stores/Analytics/SalesBy';



let salesBy = new SalesBy()

let ownersChartsstuff = [{ name: "kimK", value: 10000 }, { name: "kyleJ", value: 1000000000000 }, { name: "alaadam", value: 100000000000000000000000000 }]
let salesByCountry = [{ name: 'brazil', value: 100 }, { name: 'london', value: 21 },
{ name: 'USA', value: 57 }, { name: 'China', value: 88 }, { name: 'Japan', value: 95 }]
let emails = [{ name: "A", value: 1 }, { name: "B", value: 9 }, { name: "C", value: 13 }, { name: "D", value: 1000 }]
let months = [{ name: "Jan", value: 1 }, { name: "Feb", value: 2 }, { name: "Mar", value: 3 },
           { name: "Apr", value: 4 }]


salesBy.owners = (ownersChartsstuff)
salesBy.countries = (salesByCountry)
salesBy.emails = (emails)
salesBy.months = (months)



let clients = new Clients()
clients.updateListOfClients()

// let badge1 = new Badge('public\newClients.png', 'New Clients', '14')
// let badge2 = new Badge('', 'Email Sent', '340')
// let badge3 = new Badge('public\outStandingClient.jpg', 'outstanding Clients', '298')
// let badge4 = new Badge('icon.png', 'hottest country', 'france')

let first = { name: "alaa", value: 999 }
let second = { name: "ameer", value: 300 }
let third = { name: "salma", value: 200 }
let top3 = new TopEmployees({ first: first, second: second, third: third })

let countries = new Countries()
countries.updateListOfCountries()
let owners = new Owners()
owners.getOwners()

let analytics = new Analytics()
analytics.updateBadges()
analytics.updateTopThreeEmployee()
analytics.updateSalesby()

const stores = {
  clients: clients,
  owners: owners,
  analytics: analytics,
  countries:countries
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
