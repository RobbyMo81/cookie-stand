'use strict'
/////////////////////////////Cookie stand code is this area //////////////////
////the remeber that the line of code is reads from top to bottom///////////
//////in correctly placeing code out of oder can cause undefined errors////////


//////this line grabs the link to the html sheet. in the html sheet the//////
//////id salestable is inside the table tag this line is connected to line//////
/////that starts with render///////////////
var tableHeader = document.getElementById('tableHeader');
var table = document.getElementById('salesdata');
var tableFooter = document.getElementById('totals')

var totalStores = [];

////////////////Stores are made here///////////////////////////
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.cookiesByHour = [];
  this.totalCookiesPerDay = 0;
  this.time = []
  totalStores.push(this);
}

/////////////////////////////hours of operation/////////////////////////////
CookieStand.prototype.hours = ['6 am:','7 am:','8 am:','9 am:','10 am:', '11 am:', '12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:',
'6 pm:','7 pm:'];

///////////////////////////////loops for cookies per//////////////////////////
/////////break down the code below////////////////////
////////////the block CookieStand is our the Constructor/////////
///////the constructor has all the information need to build a cookie store////////
CookieStand.prototype.generateCookiesPerHour = function () {
  ////////prototype lists all the available data || information that is in the Constructor//////
//////the last block of words ///.generateCookiesPerHour////// 
//////is the name of the of this function./////
 /////this is how we can use the generateCookiesPerHour function in other functions//////////////////

  
  for (var avgCookie = 0; avgCookie < this.hours.length; avgCookie++) {
    this.cookiesByHour.push(Math.floor(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust));
  }
}
//////////////end of the generateCookiesPerHour function///////////////

////////////this function makes daily totals of cookies per day///////////
CookieStand.prototype.generateDailyTotals = function () {
  for (var dailyTotals = 0; dailyTotals < this.cookiesByHour.length; dailyTotals++) {
    this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[dailyTotals];
  }
}
////////////end of generateDailyTotals function///////////

function render(byHour){

  var row = document.createElement('tr');
  var header = document.createElement('td');
  header.textContent = byHour.header;
  row.appendChild(header);

  for (var i = 0; i < byHour.cookiesByHour.length; i++) {
    
    var data = document.createElement('th');
    data.textContent = byHour.hours[i];
    row.appendChild(data);
  }
tableHeader.appendChild(row);
}///////end of render hour//////

///////// to render a single row of data for a store. this line is//////
//////connected to the line above starts with the words "grab"////////
function render(city) {  
  /////////// 'tr' is table row and will make one row of data'///////////
  /////this block of code builds the table rows and cells///////
  /////////starting with the city name followed by the numbers///////

  ///////////////////////
  
  var row = document.createElement('tr');
  var name = document.createElement('td');
  name.textContent = city.name;
  row.appendChild(name);

  ////////the block of code above is the skelton of the table./////////

  
  /////// this  for loop create as many <td>s as there are values in cookiesByHour////
  ///////this loops through the array of information located in the
  for (var i = 0; i < city.cookiesByHour.length; i++) {  
    
    
    var data = document.createElement('td');
    data.textContent = city.cookiesByHour[i];
    row.appendChild(data);
  }
  var total = document.createElement('td');
  total.textContent = city.totalCookiesPerDay;
  row.appendChild(total);
  // add one more <td> for the store name, and another for daily total

  tableHeader.appendChild(row);
  //table.appendChild(row);
}///////// end of render city///////////////
console.log();

var seattle = new CookieStand('Seattle', 6, 44, 1.2);
//seattle.generateCookiesPerHour();
//seattle.generateDailyTotals();
//render(seattle);
var paris = new CookieStand('Tokyo', 11, 38, 1.9);
var london = new CookieStand('Paris', 20, 48, 3.3);
var newYork = new CookieStand('Lima', 3, 24, 2.6);

function randomNumberOfCustomers(min, max) {
  return (Math.random() * (max - min) + min);
}


for (var i = 0; i < totalStores.length; i++) {
  totalStores[i].generateCookiesPerHour();
  totalStores[i].generateDailyTotals();
  render(totalStores[i]);
}



//Conditions for the test
// coookies to make depends on hours of operations (6pm to 8pm) all locations
//each location will have minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer

//application needs to be easily modified

//Time array 
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
            '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
console.log (hours)
//future use city array
var city = [seattle, tokyo, dubai, paris, lima]

console.log (city)
//all store Arrays are here
var seattleArray = [];
var tokyoArray = [];
var dubaiArray = [];
var parisArray = [];
var limaArray = [];


var seattle = {
//Seattle store 
  minCustomer : 23,
  maxCustomer : 65,
  averageCookies : 6.3,
}

//tokyo store
var tokyo = {
  minCustomer : 3,
  maxCustomer : 24,
  averageCookies : 1.2,
}

//dubai store
var dubai = {
  minCustomer : 11,
  maxCustomer : 38,
  averageCookies : 3.7,
}

//paris store
var paris = {
  minCustomer : 20,
  maxCustomer : 38,
  averageCookies : 2.3,
}

//lima store
var lima = {
  minCustomer : 2,
  maxCustomer : 16,
  averageCookies : 4.6,
}


//for loop to place items in array. loop is using the length of the time array above

for (var i =0; i<hours.length; i++){
//seattle
  var seattleNum = randomNumberGenerator(seattle.minCustomer,seattle.maxCustomer);
  var seattleCalculation = Math.floor(seattleNum * seattle.averageCookies);
  seattleArray.push(seattleCalculation);
//tokyo
  var tokyoNum = randomNumberGenerator(tokyo.minCustomer,tokyo.maxCustomer);
  var tokyoCalculation = Math.floor(tokyoNum * tokyo.averageCookies);
  tokyoArray.push(tokyoCalculation);
//dubai
  var dubaiNum = randomNumberGenerator(dubai.minCustomer,dubai.maxCustomer);
  var dubaiCalculation = Math.floor(dubaiNum * dubai.averageCookies);
  dubaiArray.push(dubaiCalculation);
  //paris
  var parisNum = randomNumberGenerator(paris.minCustomer,paris.maxCustomer);
  var parisCalculation = Math.floor(parisNum * paris.averageCookies);
  parisArray.push(parisCalculation);
  //paris
  var limaNum = randomNumberGenerator(lima.minCustomer,lima.maxCustomer);
  var limaCalculation = Math.floor(limaNum * lima.averageCookies);
  limaArray.push(limaCalculation);
  

randomNumberGenerator(seattle);
randomNumberGenerator(tokyo);
randomNumberGenerator(dubai);
randomNumberGenerator(paris);
randomNumberGenerator(lima);

//calculates the numbers given and produces a random number. the math part is a built infunction in JS
function randomNumberGenerator (minCustomer, maxCustomer){

  // minCustomer = Math.floor(minCustomer);
  // maxCustomer = Math.ceil(maxCustomer);

  return Math.floor(Math.random() * (maxCustomer - minCustomer) +minCustomer);
}


  //store logs
  console.log('this is the seattle number ' + seattleNum);
  console.log('this is the seattle calculations ' + seattleCalculation);

  console.log('this is the seattle number ' + tokyoNum);
  console.log('this is the seattle calculations ' + tokyoCalculation);

  console.log('this is the seattle number ' + dubaiNum);
  console.log('this is the seattle calculations ' + dubaiCalculation);

  console.log('this is the seattle number ' + parisNum);
  console.log('this is the seattle calculations ' + parisCalculation);

  console.log('this is the seattle number ' + limaNum);
  console.log('this is the seattle calculations ' + limaCalculation);
}



//results of the randomized numbers for stores
console.log('this is the seattle array ' + seattleArray);
console.log('this is the tokyo array ' + tokyoArray);
console.log('this is the dubai array ' + dubaiArray);
console.log('this is the paris array ' + parisArray);
console.log('this is the lima array ' + limaArray);

//store function call


//this is where we are going to put this information in html

//from js to html
let list = document.getElementById ('storelocation')

//add heading here we are making an element

let heading = document.createElement('li');





  
  function CookieStandStore (name,minCust,maxCust,avgCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
  }
  var seattle = new CookieStandStore ('Seattle', );

var table =document.getElementById ('tablebody');








//////////////////////////sample code is below///////////////////////////

// var table = document.getElementById('salestable');
// var totalStores = [];
// var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
//              '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
// var allPokemon

// function Pokemon(){
//   this.name = name;
//   this.attach = attack;

// }

// function handleForm(event){

//   console.log(event.target.banana.value)//target equals the form
//   event.preventDefault();
//   var name = event.target.name.value;
//   var attack = event.target.attack.value;

//   var pokemon = new Pokemon(name,attack);
//   allPokemon.push(pokemon);
//   console.log(allPokemon);
// }

// // var login = document.getElementById('salestable')

// // let formOne = document.getElementById("formOne");
// // formOne.addEventListener('submit', handleForm);
// // formOne.addEventListener('click', handleForm);


// function calcHourlyTotals (){
//   var hourly = 0;
//   var grand = 0;
//   for (var hourNum = 0; hourNum < hour.length; hourNum ++){

//   }
// }



// //block of code is from class today my instructor is Jacob Knaack.
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
// CookieStand.prototype.render = ['6am:', '7am:', '8am:'];




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





// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////



// var seattle = new CookieStand ('Seattle', 6, 44, 1.2)
// seattle.generateCookiesPerHour();
// seattle.generateDailyTotals(2);
// render (seattle);

// var tokyo = new CookieStand ('Tokyo', 10, 33, 12);
// seattle.generateCookiesPerHour();
// seattle.generateDailyTotals();
// render (tokyo);

// //make sure to use the new key word to pull the information from the consturtor fucntion above
// //let seattle = new CookieStand ('Seattle' , 6, 44, 1.2);


// //random number generator is below this is a prebuilt tool injs

// function randomNumberGenerator (minCustomer, maxCustomer){

//   minCustomer = Math.ceil(minCustomer);
//   maxCustomer = Math.ceil(maxCustomer);

//   return Math.floor(Math.random() * (maxCustomer - minCustomer))+minCustomer;
// }
// randomNumberGenerator(seattle);
// randomNumberGenerator(tokyo);
// randomNumberGenerator(dubai);
// randomNumberGenerator(paris);
// randomNumberGenerator(lima);


// for (var i =0; i<hours.length; i++){
//   //seattle
//     var seattleNum = randomNumberGenerator(seattle.minCustomer,seattle.maxCustomer);
//     var seattleCalculation = seattleNum * seattle.averageCookies;
//     seattleArray.push(seattleCalculation);
//   //tokyo
//     var tokyoNum = randomNumberGenerator(tokyo.minCustomer,tokyo.maxCustomer);
//     var tokyoCalculation = tokyoNum * tokyo.averageCookies;
//     tokyoArray.push(tokyoCalculation);
//   //dubai
//     var dubaiNum = randomNumberGenerator(dubai.minCustomer,dubai.maxCustomer);
//     var dubaiCalculation = dubaiNum * dubai.averageCookies;
//     dubaiArray.push(dubaiCalculation);
//     //paris
//     var parisNum = randomNumberGenerator(paris.minCustomer,paris.maxCustomer);
//     var parisCalculation = parisNum * paris.averageCookies;
//     parisArray.push(parisCalculation);
//     //paris
//     var limaNum = randomNumberGenerator(lima.minCustomer,lima.maxCustomer);
//     var limaCalculation = limaNum * lima.averageCookies;
//     limaArray.push(limaCalculation);
    
  
  
  
//     //store logs
//     console.log('this is the seattle number ' + seattleNum);
//     console.log('this is the seattle calculations ' + seattleCalculation);
  
//     console.log('this is the seattle number ' + tokyoNum);
//     console.log('this is the seattle calculations ' + tokyoCalculation);
  
//     console.log('this is the seattle number ' + dubaiNum);
//     console.log('this is the seattle calculations ' + dubaiCalculation);
  
//     console.log('this is the seattle number ' + parisNum);
//     console.log('this is the seattle calculations ' + parisCalculation);
  
//     console.log('this is the seattle number ' + limaNum);
//     console.log('this is the seattle calculations ' + limaCalculation);
//   }


// function randomNumberGenerator(min, max) {
//   console.log(min, max)
//   return Math.floor(Math.random() * (max - min) + min);
// }


// //will render a single row for a store
// function render(store){
//   //need to create on 'tr' and as many values for one cookie per hour
//   var row = document.createElement('tr');
//   var name = document.createElement('td');
//   name.textContent = store.name;
//   row.appendChild(name);

//   //need to add one more 'td' for store name and  daily total
//   for (var i = 0; i < store.cookiesByHour; i ++){
//     var data = document.createElement ('td');
//     row.appendChild(data);

//     table.appendChild(row);

//   }
// }

// for (var i =0; i < totalStores.length; i ++){}
// //block of code above is from Wednesday Feb 12 class and Jacob Knaack refactured the code from the Salmon cookies lab





