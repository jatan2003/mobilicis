import './App.css';
// import React, { useState } from 'react';


function App() {
  // let data
  //get d1
  function createTable(data) {
    var table = document.getElementById("myTable");
    var table2 = document.getElementById("myTable2");
    if (!table2.classList.contains("hidden")) {
      table2.classList.add("hidden");
    }
    if (table.classList.contains("hidden")) {
      table.classList.remove("hidden");
    }
    var tbody = table.querySelector("tbody");
    tbody.remove()
    tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (var i = 0; i < data.length; i++) {
      var row = tbody.insertRow(i);
      var idCell = row.insertCell(0);
      var firstNameCell = row.insertCell(1);
      var lastNameCell = row.insertCell(2);
      var emailCell = row.insertCell(3);
      var genderCell = row.insertCell(4);
      var incomeCell = row.insertCell(5);
      var cityCell = row.insertCell(6);
      var carCell = row.insertCell(7);
      var quoteCell = row.insertCell(8);
      var phoneCell = row.insertCell(9);
      idCell.innerHTML = data[i].id;
      firstNameCell.innerHTML = data[i].first_name;
      lastNameCell.innerHTML = data[i].last_name;
      emailCell.innerHTML = data[i].email;
      genderCell.innerHTML = data[i].gender;
      incomeCell.innerHTML = data[i].income;
      cityCell.innerHTML = data[i].city;
      carCell.innerHTML = data[i].car;
      quoteCell.innerHTML = data[i].quote;
      phoneCell.innerHTML = data[i].phone_price;
    }
  }
  async function event1() {
    let response = await fetch('http://localhost:5000/api/deatails/user/five/bmw/mercedes')
    let data = await response.json();
    let element=document.getElementsByClassName("api")
    if(element.length>0){
      element[0].innerHTML = "1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”."
    }
    createTable(data)
    
  }
  async function event2() {
    let response = await fetch('http://localhost:5000/api/deatails/user/male/phone/10000')
    let data = await response.json();
    let element=document.getElementsByClassName("api")
    if(element.length>0){
      element[0].innerHTML = "2. Male Users which have phone price greater than 10,000."
    }
    createTable(data)
  }
  async function event3() {
    let response = await fetch('http://localhost:5000/api/deatails/user/lastname/m/email/last')
    let data = await response.json();
    let element=document.getElementsByClassName("api")
    if(element.length>0){
      element[0].innerHTML = "3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name."
    }
    createTable(data)
  }
  async function event4() {
    let response = await fetch('http://localhost:5000/api/deatails/user/bmw/mercedes/audi/email/hasdigit')
    let data = await response.json();
    let element=document.getElementsByClassName("api")
    if(element.length>0){
      element[0].innerHTML = "4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit."
    }
    createTable(data)
  }
  async function event5() {
    let response = await fetch('http://localhost:5000/api/deatails/user/top10/cities')
    let data = await response.json();
    let element=document.getElementsByClassName("api")
    if(element.length>0){
      element[0].innerHTML = "5. Show the data of top 10 cities which have the highest number of users and their average income."
    }
    var table = document.getElementById("myTable2");
    var table2 = document.getElementById("myTable");
    if (!table2.classList.contains("hidden")) {
      table2.classList.add("hidden");
    }
    if (table.classList.contains("hidden")) {
      table.classList.remove("hidden");
    }
    var tbody = table.querySelector("tbody");
    tbody.remove()
    tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (var i = 0; i < data.length; i++) {
      var row = tbody.insertRow(i);
      var cityCell = row.insertCell(0);
      var userCell = row.insertCell(1);
      var cityAvgCell = row.insertCell(2);
      cityCell.innerHTML = data[i].city;
      userCell.innerHTML = data[i].users;
      cityAvgCell.innerHTML = data[i].city_avg_income;
    }
  }
  return (
    <div>
      <div className="d-flex flex-column">
      <div >
        <button type="button" class="btn mx-2 my-2 btn-primary" onClick={() => event1()}>Click</button>
        1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
      </div>
      <div>
        <button type="button" class="btn mx-2 my-2 btn-primary" onClick={() => event2()}>Click</button>
        2. Male Users which have phone price greater than 10,000.
      </div>
      <div>
        <button type="button" class="btn mx-2 my-2 btn-primary" onClick={() => event3()}>Click</button>
        3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
      </div>
      <div>
        <button type="button" class="btn  mx-2 my-2 btn-primary" onClick={() => event4()}>Click</button>
        4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
      </div>
      <div>
        <button type="button" class="btn my-2 mx-2 btn-primary" onClick={() => event5()}>Click</button>
        5. Show the data of top 10 cities which have the highest number of users and their average income.
      </div>
    </div>
      <h3 className="api">Table</h3>
    <table id="myTable2" className="hidden">
        <thead>
          <tr>
            <th>City</th>
            <th>No. of Users</th>
            <th>Avg. Income</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <table id="myTable" className="hidden">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    
    

  );
}

export default App;
