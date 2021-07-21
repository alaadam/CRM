const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')
const router = express.Router()

router.get('/clients', function (req, res) {
        let { offset } = req.query
        sequelize
                .query(`SELECT *,client.id as id 
                        FROM client 
                        LEFT JOIN email_type ON client.email_type_id = email_type.id
                        LEFT JOIN country ON client.country_id = country.id
                        LEFT JOIN owner ON client.owner_id = owner.id
                        LIMIT ${offset},20 
                `)
                .then(function ([result]) {
                        res.send(result)
                })
})

router.post('/clients', async function (req, res) {

        let newClient = req.body
        console.log(newClient)
        let email = createEmail(newClient.last, newClient.first)
        let date = formatDate(new Date())

        let ownerId = await getOwnerId(newClient.owner)
        let countryId = await getCountryId(newClient.country)
        sequelize
                .query(`INSERT INTO client(first,last,email,sold,date,country_id,owner_id)
                VALUES ('${newClient.first}','${newClient.last}','${email}','${1}',
                '${date}', ${countryId}, ${ownerId})`)
                .then(function ([result]) {
                        console.log(result)
                })
        res.send()
})

router.put('/clients/personalInfo', async function (req, res) {

        let countryId = await getCountryId(req.body.newInfo.country)

        sequelize
                .query(`UPDATE client
                SET first = '${req.body.newInfo.first}',
                last = '${req.body.newInfo.last}',
                country_id = ${countryId} 
                WHERE client.id = ${req.body.id}`)
                .then(function ([result]) {
                        console.log(result)
                })
        res.send()
})

router.put('/clients/ownership', async function (req, res) {

        let ownerId = await getOwneryId(req.body.owner)

        sequelize
                .query(`UPDATE client
                SET owner_id = ${ownerId}
                WHERE client.last = '${req.body.last}'
                AND client.first = '${req.body.first}'`)
                .then(function ([result]) {
                        console.log(result)
                })
        res.send()
})

router.put('/clients/emailType', async function (req, res) {

        let emailTypeId = await getEmaiTypeyId(req.body.emailType)

        sequelize
                .query(`UPDATE client
                SET email_type_id = ${emailTypeId}
                WHERE client.last = '${req.body.last}'
                AND client.first = '${req.body.first}'`)
                .then(function ([result]) {
                        console.log(result)
                })
        res.send()
})

router.put('/clients/sale', function (req, res) {

        sequelize
                .query(`UPDATE client
                SET sold = ${1}
                WHERE client.last = '${req.body.last}'
                AND client.first = '${req.body.first}'`)
                .then(function ([result]) {
                        console.log(result)
                })
        res.send()
})


router.get('/analytics/topThree', async function (req, res) {

        let topThreeEmployess = await getTopThreeEmployees()

        res.send(topThreeEmployess)
})

router.get('/analytics/salesBy', async function (req, res) {

        let salesByCountry = await getSalesBy('country')
        let salesByEmail = await getSalesBy('email_type')
        let salesByMonth = await getSalesByDate()
        let salesByOwner = await getSalesBy('owner')
       
        res.send({ country : salesByCountry[0], email:salesByEmail[0],
                month:salesByMonth,owner:salesByOwner[0]})
})

router.get('/owners', function (req, res) {
        sequelize
                .query(`SELECT owner FROM owner`)
                .then(function ([result]) {
                        console.log(result)
                        res.send(result)
                })
})

router.get('/countries', function (req, res) {
        sequelize.query(`select country 
        from country`)
                .then(function ([result]) {
                        res.send(result)
                })
})

router.get('/analytics/badges', async function (req, res) {

        let newClients = await getBadgeSalesMonth()
        let emailSent = await getEmailsTotal()
        let outstandingClients = await getOutstandingClients()
        let hottestCountry = await getHottestCountry()

        res.send({ newClients, emailSent, outstandingClients, hottestCountry })

})

const getCountryId = async (countryName) => {
        let country = await sequelize.query(`
        select country.id 
        FROM country 
        Where country = '${countryName}'`)

        return country[0][0].id
}

const getOwnerId = async (ownerName) => {
        let owner = await sequelize.query(`select owner.id FROM owner 
        Where owner = '${ownerName}'`)

        return owner[0][0].id
}

const getEmaiTypeyId = async (emailType) => {
        let emailTypeId = await sequelize.query(`select email_type.id FROM email_type 
        Where email_type = '${emailType}'`)

        return emailTypeId[0][0].id
}

const createEmail = (last, first) => {
        return `${first.toLowerCase()}${last.toLowerCase()}@imant.com`
}

function formatDate(date) {
        var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

        if (month.length < 2)
                month = month;
        if (day.length < 2)
                day = '0' + day;
        return [day, month, year].join('.');
}

const getCurMonth = () => {
        let d = new Date()
        return (d.getMonth() + 1)
}

const getCurYear = () => {
        let d = new Date()
        return (d.getFullYear())
}

const getBadgeSalesMonth = async () => {
        let month = getCurMonth()
        let year = getCurYear()
        console.log(year)
        let sales = await sequelize.query(`
    select count(client.date) from client
    where client.date like '%.${month}.${year}'`)

        return sales[0][0]['count(client.date)']
}

const getEmailsTotal = async () => {
        let emailSent = await sequelize.query(`
        select count(client.email_type_id) from client
        where client.email_type_id IS NOT NULL
        `)
        return emailSent[0][0]['count(client.email_type_id)']
}

const getOutstandingClients = async () => {
        let outstandingClients = await sequelize.query(`
        select count(client.id) from client 
        where client.sold = 0`)
        return outstandingClients[0][0]['count(client.id)']
}

const getHottestCountry = async () => {
        let hottestCountry = await sequelize.query(`
        select country ,(count(sold)) from client
        LEFT JOIN country ON client.country_id = country.id
        WHERE sold = 1
        GROUP BY country ORDER BY count(sold) DESC LIMIT 1`)
        return hottestCountry[0][0]['country']
}

const getTopThreeEmployees = async () => {
        let topThreeEmployess = await sequelize.query(`
        select  count(client.id) , owner from client
        LEFT JOIN owner On client.owner_id = owner.id
        WHERE client.sold = 1
        GROUP BY owner 
        ORDER BY count(client.id) DESC LIMIT 3`)

        return topThreeEmployess[0]
}

const getSalesBy = async (filter) => {
        let res = await sequelize.query(`
        select ${filter} as name,count(client.id) AS value from client   
        LEFT JOIN ${filter} on client.${filter}_id = ${filter}.id
        where client.sold = 1
        group by ${filter}`)
        return res
}

const getSalesByDate = async () => {
        let result = []
        for (let month = 1; month < 13; month++) {
                let res= (await sequelize.query(`
                select count(client.id) AS value from client  
                        where client.sold = 1 AND
                        date LIKE '%.${month}.%'`))

                result.push({ name : [monthNames[month-1]] ,value : res[0][0].value})        
        }
        return result
}

const monthNames = ["January", "February", "March",
                    "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
module.exports = router