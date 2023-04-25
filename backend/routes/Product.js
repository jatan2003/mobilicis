const express = require('express');
const router = express.Router()
const Product = require('../models/products')
router.get('/find/all/products', async (req, res) => {
    let data = await Product.find({})
    res.json(data);
})

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get('/user/five/bmw/mercedes', async (req, res) => {
    let data = await Product.find({})
    let result = [];
    data.forEach(user => {
        let strIncome = user.income.substring(1, (user.income.length))
        let income = parseFloat(strIncome);
        if ((income < 5.00) && (user.car === 'BMW' || user.car === 'Mercedes-Benz')) {
            result = result.concat(user)
        }

    })
    res.send(result)
})

//2. Male Users which have phone price greater than 10,000.
router.get('/user/male/phone/10000', async (req, res) => {
    let data = await Product.find({})
    let result = [];
    data.forEach(user => {
        let strIncome = user.phone_price.substring(0, (user.phone_price.length))
        let price = parseFloat(strIncome);
        if ((price > 10000) && (user.gender === 'Male')) {
            result = result.concat(user)
        }

    })
    res.send(result)
})

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

router.get('/user/lastname/m/email/last', async (req, res) => {
    let data = await Product.find({})
    let result = [];
    data.forEach(user => {
        let last = user.last_name
        let quote = user.quote
        let email = user.email
        if (last.charAt(0) == 'M' && quote.length > 15 && email.includes(last.toLowerCase())) {
            result = result.concat(user)
        }

    })
    res.send(result)
})

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

router.get('/user/bmw/mercedes/audi/email/hasdigit', async (req, res) => {
    let data = await Product.find({})
    let result = [];
    data.forEach(user => {
        let car = user.car
        let email = user.email
        let containsDigit = false
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) >= '0' && email.charAt(i) <= '9') {
                containsDigit = true
                break;
            }
        }
        if ((car === "BMW" || car === "Audi" || car === "Mercedes-Benz") && (!containsDigit)) {
            result = result.concat(user)
        }

    })
    res.send(result)
})

// 5. Show the data of top 10 cities which have the highest number of users and their average income.

router.get('/user/top10/cities', async (req, res) => {
    let data = await Product.find({})
    let cityUser = new Map();
    let cityIncome = new Map();

    let result = [];
    data.forEach(user => {
        let strIncome = user.income.substring(1, (user.income.length))
        let income = parseFloat(strIncome);
        let city = user.city;
        if (cityIncome.has(city)) {
            cityIncome.set(city, (cityIncome.get(city) + income))
        }
        else {
            cityIncome.set(city, income)
        }

        if (cityUser.has(city)) {
            cityUser.set(city, (cityUser.get(city) + 1))
        }
        else {
            cityUser.set(city, 1)
        }
        // console.log(`${city} --> ${cityUser.get(city)}`)




    })
    const sortedArray = Array.from(cityUser.entries()).sort((a, b) => b[1] - a[1]);
    const sortedMap = new Map(sortedArray);
    let entry = sortedMap.entries();
    // console.log(entry)
    for(let i = 0;i<10;i++){
        let city = entry.next().value;
        console.log(city[0]);
        result = result.concat({city:city[0],
            users:city[1],
            city_avg_income: (cityIncome.get(city[0])/city[1])    
        });
    }
    res.send(result)
})



module.exports = router