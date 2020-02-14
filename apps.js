'use strict'
//////////////////////////////////////////SALES TABLE IS BELOW//////////////////////////var table = document.getElementById('salestable');
var totalStores = [];

////////////////Stores are made here///////////////////////////
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.cookiesByHour = [];
  this.totalCookiesPerDay = 0;
  totalStores.push(this);
}



//////////////////////////////////Top row Place holder////////////////////
var topRow = ['6 am:','7 am:','8 am:','9 am:','10 am:', '11 am:', '12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:',
'6 pm:','7 pm:', 'Total'];

/////////////////////////////hours of operation/////////////////////////////
CookieStand.prototype.hours = ['6 am:','7 am:','8 am:','9 am:','10 am:', '11 am:', '12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:',
'6 pm:','7 pm:'];

///////////////////////////////loops for cookies per//////////////////////////
CookieStand.prototype.generateCookiesPerHour = function () {
  
  for (var avgCookie = 0; avgCookie < this.hours.length; avgCookie++) {
    this.cookiesByHour.push(Math.floor(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust));
  }
}

CookieStand.prototype.generateDailyTotals = function () {
  for (var dailyTotals = 0; dailyTotals < this.cookiesByHour.length; dailyTotals++) {
    this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[dailyTotals];
  }
}

// to render a single row of data for a store
function render(city) {
//////building the top row//////////////////
  
  var row = document.createElement('tr');
  var name = document.createElement('td');
  name.textContent = city.name;
  row.appendChild(name);
  // create one tr
  var row = document.createElement('tr');
  var name = document.createElement('td');
  name.textContent = city.name;
  row.appendChild(name);

  // create as many <td>s as there are values in cookiesByHour
  for (var i = 0; i < city.cookiesByHour.length; i++) {

    var data = document.createElement('td');
    data.textContent = city.hours[i];
    row.appendChild(data);
    
    var data = document.createElement('td');
    data.textContent = city.cookiesByHour[i];
    row.appendChild(data);
  }
  var total = document.createElement('td');
  total.textContent = city.totalCookiesPerDay;
  row.appendChild(total);
  // add one more <td> for the store name, and another for daily total

  //table.appendChild(row);
}

var seattle = new CookieStand('Seattle', 6, 44, 1.2);
// seattle.generateCookiesPerHour();
// seattle.generateDailyTotals();
// render(seattle);
var paris = new CookieStand('Paris', 11, 38, 1.9);
var london = new CookieStand('London', 20, 48, 3.3);
var newYork = new CookieStand('New York', 3, 24, 2.6);

function randomNumberOfCustomers(min, max) {
  return (Math.random() * (max - min) + min);
}


for (var i = 0; i < totalStores.length; i++) {
  totalStores[i].generateCookiesPerHour();
  totalStores[i].generateDailyTotals();
  render(totalStores[i]);
}
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////Salmon Cookies data is below//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
//             '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
// console.log (hours)
// //future use city array
// var city = [seattle, tokyo, dubai, paris, lima]

// console.log ("hello this is the top console log")
// //all store Arrays are here
// var seattleArray = [];
// var tokyoArray = [];
// var dubaiArray = [];
// var parisArray = [];
// var limaArray = [];


// var seattle = {

// //Seattle store 
//   minCustomer : 23,
//   maxCustomer : 65,
//   averageCookies : 6.3,
// }

// //tokyo store
// var tokyo = {
//   minCustomer : 3,
//   maxCustomer : 24,
//   averageCookies : 1.2,
// }

// //dubai store
// var dubai = {
//   minCustomer : 11,
//   maxCustomer : 38,
//   averageCookies : 3.7,
// }

// //paris store
// var paris = {
//   minCustomer : 20,
//   maxCustomer : 38,
//   averageCookies : 2.3,
// }

// //lima store
// var lima = {
//   minCustomer : 2,
//   maxCustomer : 16,
//   averageCookies : 4.6,
// }

// //calculates the numbers given and produces a random number. the math part is a built infunction in JS
// function randomNumberGenerator (minCustomer, maxCustomer){
//   return Math.floor(Math.random()*(maxCustomer-minCustomer)+minCustomer);
// }
// randomNumberGenerator(seattle);
// randomNumberGenerator(tokyo);
// randomNumberGenerator(dubai);
// randomNumberGenerator(paris);
// randomNumberGenerator(lima);
// //for loop to place items in array. loop is using the length of the time array above

// for (var i =0; i<hours.length; i++){
// //seattle
//   var seattleNum = randomNumberGenerator(seattle.minCustomer,seattle.maxCustomer);
//   var seattleCalculation = Math.floor(seattleNum * seattle.averageCookies);
//   seattleArray.push(seattleCalculation);
// //tokyo
//   var tokyoNum = randomNumberGenerator(tokyo.minCustomer,tokyo.maxCustomer);
//   var tokyoCalculation = Math.floor(tokyoNum * tokyo.averageCookies);
//   tokyoArray.push(tokyoCalculation);
// //dubai
//   var dubaiNum = randomNumberGenerator(dubai.minCustomer,dubai.maxCustomer);
//   var dubaiCalculation = Math.floor(dubaiNum * dubai.averageCookies);
//   dubaiArray.push(dubaiCalculation);
//   //paris
//   var parisNum = randomNumberGenerator(paris.minCustomer,paris.maxCustomer);
//   var parisCalculation = Math.floor(parisNum * paris.averageCookies);
//   parisArray.push(parisCalculation);
//   //paris
//   var limaNum = randomNumberGenerator(lima.minCustomer,lima.maxCustomer);
//   var limaCalculation = Math.floor(limaNum * lima.averageCookies);
//   limaArray.push(limaCalculation);
  



//   //store logs
//   // console.log('this is the seattle number ' + seattleNum);
//   // console.log('this is the seattle calculations ' + seattleCalculation);

//   // console.log('this is the seattle number ' + tokyoNum);
//   // console.log('this is the seattle calculations ' + tokyoCalculation);

//   // console.log('this is the seattle number ' + dubaiNum);
//   // console.log('this is the seattle calculations ' + dubaiCalculation);

//   // console.log('this is the seattle number ' + parisNum);
//   // console.log('this is the seattle calculations ' + parisCalculation);

//   // console.log('this is the seattle number ' + limaNum);
//   // console.log('this is the seattle calculations ' + limaCalculation);
// }



// //results of the randomized numbers for stores
// console.log('this is the seattle array ' + seattleArray);
// console.log('this is the tokyo array ' + tokyoArray);
// console.log('this is the dubai array ' + dubaiArray);
// console.log('this is the paris array ' + parisArray);
// console.log('this is the lima array ' + limaArray);

// ///////////////////////////////////////////////////////////////////////
// //store function call


// //this is where we are going to put this information in html

// //from js to html
// let list = document.getElementById ('storelocation')
// //add heading here we are making an element
// let row = document.createElement('tr');
// let name = document.createElement('th');
// name.content = 
// //let item = document.createElement('td');
// // list.appendChild(row, name, item);

 


  
// //   function CookieStandStore (name,minCust,maxCust,avgCookies) {
// //     this.name = name;
// //     this.minCust = minCust;
// //     this.maxCust = maxCust;
// //     this.avgCookies = avgCookies;
// //   }

// //   var seattle = new CookieStandStore ('Seattle ', 2, 3, 4);
// //   var table =document.getElementById ('tablebody')
// // console.log(CookieStand)


//   ///////////////////////////////////////////////////////////////////////////////////
//   //var table = document.getElementById('salestable');
// //var totalStores = [];
// //var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
//   //           '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
// //var allPokemon

// function Pokemon(){
//   this.name = name;
//   this.attach = attack;

// }

// function handleForm(event){
//   event.preventDefault();
//   var name = event.target.name.value;
//   var attack = event.target.attack.value;

//   var pokemon = new Pokemon(name,attack);
//   allPokemon.push(pokemon);
//   console.log(allPokemon);
// }

// var login = document.getElementById('salestable')

// let formOne = document.getElementById("formOne");
// formOne.addEventListener('submit', handleForm);
// formOne.addEventListener('click', handleForm);


// function calcHourlyTotals (){
//   var hourly = 0;
//   var grand = 0;
//   for (var hourNum = 0; hourNum < hour.length; hourNum ++){

//   }
// }



// //block of code is from class today my instructor is Jacob Knaack.


// var table = document.getElementById('salesdata')
// var totalStores = [];


// // Constructor function for Cookie Store
// function CookieStand(nameStore, minCustomer, maxCustomer, avgCookie){
//   this.name = nameStore;
//   this.minCust = minCustomer;
//   this.maxCust = maxCustomer;
//   this.avgCookiePerCust = avgCookie;
//   this.cookiesByHour = [];
//   this.totalCookiesPerDay = 0;
//   totalStores.push(this)
// }

// //this will hold all the total cookies sold per hour the prototype will get the instance from the cookiestand function
// CookieStand.prototype.render = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
// '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];




// //this is the loop for customers and cookies
// CookieStand.prototype.generateCookiesPerHour = function (){
//   for (var randomNum = 0; randomNum < hours.length; randomNum ++){
//   this.cookiesByHour.push(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust );
    
//   }

// }

// //makes the total number for all data
// CookieStand.prototype.generateDailyTotals = function(){
//   for (var i = 0; i<this.cookiesByHour.length; i ++){
//     this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[i];
//     console.log(this)
//   }
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////code below is for lab 09////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function CookieStand (nameStore, minCustomer, maxCustomer, avgCookie) {
// //   this.name = nameStore;
// //   this.minCust = minCustomer;
// //   this.maxCust = maxCustomer;
// //   this.avgCookiePerCust = avgCookie;
// //   this.cookiesByHour = [];
// //   this.totalCookiesPerDay = 0;
// //   totalStores.push(this);
// // }

// // //this will hold all the total cookies sold per hour the prototype will get the instance from the cookiestand function
// // CookieStand.prototype.render = ['6am:', '7am:', '8am:'];

// // //this is the loop for customers and cookies
// // CookieStand.prototype.generateCookiesPerHour = function (){
// //   for (var randomNum = 0; randomNum < this.hours.length; randomNum ++){
// //     this.cookiesByHour.push(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust);
// //   }
// // }
// // //console.log(cookiesByHour);

// // //makes the total number for all data
// // CookieStand.prototype.generateDailyTotals = function(){
// //   for (var i = 0; i<this.cookiesByHour.length; i ++){
// //     this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[i];
// //     console.log(this)
// //   }
// // }


// // //make sure to use the new key word to pull the information from the consturtor fucntion above
// // let seattle = new CookieStand ('Seattle' , 6, 44, 1.2);
// // seattle.generateCookiesPerHour();
// // seattle.generateDailyTotals();
// // render (seattle);

// // let tokyo = new CookieStand ('Tokyo', 10, 33, 12);

// // //random number generator is below this is a prebuilt tool injs
// // function randomNumberGenerator(min, max) {
// //   console.log(min, max)
// //   return Math.floor(Math.random() * (max - min) + min);
// // }


// // //will render a single row for a store
// // function render(store){
// //   //need to create on 'tr' and as many values for one cookie per hour
// //   var row = document.createElement('tr');
// //   var name = document.createElement('td');
// //   name.textContent = store.name;
// //   row.appendChild(name);

// //   //need to add one more 'td' for store name and  daily total
// //   for (var i = 0; i < store.cookiesByHour; i ++){
// //     var data = document.createElement ('td');
// //     row.appendChild(data);

// //     table.appendChild(row);

// //   }
// // }

// // for (var i =0; i < totalStores.length; i ++){

// // }




// //////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////below is the though process about this project/////////////////// 

// // //Conditions for the test
// // // coookies to make depends on hours of operations (6pm to 8pm) all locations
// // //each location will have minimum number of customers per hour
// // //maximum number of customers per hour
// // //average number of cookies purchased per customer

// // //application needs to be easily modified

// // //all store Arrays are here 

// // //Conditions for the test
// // // coookies to make depends on hours of operations (6pm to 8pm) all locations
// // //each location will have minimum number of customers per hour
// // //maximum number of customers per hour
// // //average number of cookies purchased per customer

// // //application needs to be easily modified


// // //Time array 
// // var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
// //             '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// // var cookieShopes =['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

// // //this is an empty array for stores
// // var seatleArray = [];

// // //this is where the constructor function lives
// // function StoreInformation (name, minCustomer, maxCustomer, avgCookie){
// //   this.name = name;
// //   this.minCustomer = minCustomer;
// //   this.maxCustomer = maxCustomer;
// //   this.avgCookie = avgCookie;
// // }

// // var seattle = new StoreInformation('Seattle' , 23, 63, 6.3)
// // //part of the above

// // console.log ('seattle store ' + seattle);

// // // construct for each cookie shope
// // function cookieShopes (storename){
// //   seattle = 'Seattle';
// //   tokyo = 'Tokyo';
// //   dubai = 'Dubai';
// //   paris = 'Paris';
// //   lima = 'Lima'

// // }

// // //builds the table row


// // //gets the id from html and brings it over to Js
// // var table = document.getElementById ('storedata');
// // var row = document.createElement ('tr');
// // table.appendChild(row);

// // var storeFront;

// // //creating the cells in the toprows
// // //first block for store name
// // storeFront = document.createElement('th');
// // storeFront.textContent = 'Store Name';
// // row.appendChild(storeFront);

// // //second cell for Minimum Customers cell
// // storeFront = document.createElement('th');
// // storeFront.textContent = 'Minimum Customer';
// // row.appendChild(storeFront);

// // //third cell for Maximium Customers
// // storeFront = document.createElement('th');
// // storeFront.textContent = 'Maximium Customers';
// // row.appendChild(storeFront);

// // //fourth cell for Averge Sales Per Customer
// // storeFront = document.createElement('th');
// // storeFront.textContent = 'Averge Sales Per Customer';
// // row.appendChild(storeFront);


// // var boxInfo;
// // //creating the cells below
// // //creating data tables here
// // row = document.createElement('tr');
// // table.appendChild(row);

// // //this is the store name
// // var boxInfo = document.createElement('td');
// // boxInfo.textContent = seattle.name;
// // row.appendChild(boxInfo);

// // //this is the store Minimum Customer numbers
// // var boxInfo = document.createElement('td');
// // boxInfo.textContent = seattle.minCustomer;
// // row.appendChild(boxInfo);

// // //this is the store Maximum Customer numbers
// // var boxInfo = document.createElement('td');
// // boxInfo.textContent = seattle.maxCustomer;
// // row.appendChild(boxInfo);

// // //this is the store Average Customer Cookies numbers
// // var boxInfo = document.createElement('td');
// // boxInfo.textContent = seattle.avgCookie;
// // row.appendChild(boxInfo);






// // //row.appendChild(stores);




// // // console.log (city)
// // // //all store Arrays are here
// // // var seattleArray = [];
// // // var tokyoArray = [];
// // // var dubaiArray = [];
// // // var parisArray = [];
// // // var limaArray = [];




// // var seattleOne = {
// // //Seattle store 
// //   minCustomer : 23,
// //   maxCustomer : 65,
// //   averageCookies : 6.3,
// // }

// // // //tokyo store
// // // var tokyo = {
// // //   minCustomer : 3,
// // //   maxCustomer : 24,
// // //   averageCookies : 1.2,
// // // }

// // // //dubai store
// // // var dubai = {
// // //   minCustomer : 11,
// // //   maxCustomer : 38,
// // //   averageCookies : 3.7,
// // // }

// // // //paris store
// // // var paris = {
// // //   minCustomer : 20,
// // //   maxCustomer : 38,
// // //   averageCookies : 2.3,
// // // }

// // // //lima store
// // // var lima = {
// // //   minCustomer : 2,
// // //   maxCustomer : 16,
// // //   averageCookies : 4.6,
// // // }

// // //calculates the numbers given and produces a random number. the math part is a built infunction in JS
// // function randomNumberGenerator (minCustomer, maxCustomer){

// //    minCustomer = Math.ceil(minCustomer);
// //    maxCustomer = Math.ceil(maxCustomer);

// // return Math.floor(Math.random() * (maxCustomer - minCustomer))+minCustomer;
// //  }
// // randomNumberGenerator(seattleOne);
// // console.log ('random ' + seattleOne);
// // // randomNumberGenerator(tokyo);
// // // randomNumberGenerator(dubai);
// // // randomNumberGenerator(paris);
// // // randomNumberGenerator(lima);
// // // //for loop to place items in array. loop is using the length of the time array above

// // // for (var i =0; i<hours.length; i++){
// // // //seattle
// // //   var seattleNum = randomNumberGenerator(seattle.minCustomer,seattle.maxCustomer);
// // //   var seattleCalculation = seattleNum * seattle.averageCookies;
// // //   seattleArray.push(seattleCalculation);
// // // //tokyo
// // //   var tokyoNum = randomNumberGenerator(tokyo.minCustomer,tokyo.maxCustomer);
// // //   var tokyoCalculation = tokyoNum * tokyo.averageCookies;
// // //   tokyoArray.push(tokyoCalculation);
// // // //dubai
// // //   var dubaiNum = randomNumberGenerator(dubai.minCustomer,dubai.maxCustomer);
// // //   var dubaiCalculation = dubaiNum * dubai.averageCookies;
// // //   dubaiArray.push(dubaiCalculation);
// // //   //paris
// // //   var parisNum = randomNumberGenerator(paris.minCustomer,paris.maxCustomer);
// // //   var parisCalculation = parisNum * paris.averageCookies;
// // //   parisArray.push(parisCalculation);
// // //   //paris
// // //   var limaNum = randomNumberGenerator(lima.minCustomer,lima.maxCustomer);
// // //   var limaCalculation = limaNum * lima.averageCookies;
// // //   limaArray.push(limaCalculation);
  



// //   //store logs
// // //   console.log('this is the seattle number ' + seattleNum);
// // //   console.log('this is the seattle calculations ' + seattleCalculation);

// // //   console.log('this is the seattle number ' + tokyoNum);
// // //   console.log('this is the seattle calculations ' + tokyoCalculation);

// // //   console.log('this is the seattle number ' + dubaiNum);
// // //   console.log('this is the seattle calculations ' + dubaiCalculation);

// // //   console.log('this is the seattle number ' + parisNum);
// // //   console.log('this is the seattle calculations ' + parisCalculation);

// // //   console.log('this is the seattle number ' + limaNum);
// // //   console.log('this is the seattle calculations ' + limaCalculation);
// // // }



// // // //results of the randomized numbers for stores
// // // console.log('this is the seattle array ' + seattleArray);
// // // console.log('this is the tokyo array ' + tokyoArray);
// // // console.log('this is the dubai array ' + dubaiArray);
// // // console.log('this is the paris array ' + parisArray);
// // // console.log('this is the lima array ' + limaArray);
