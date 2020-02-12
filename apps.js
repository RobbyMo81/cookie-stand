//Conditions for the test
// coookies to make depends on hours of operations (6pm to 8pm) all locations
//each location will have minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer

//application needs to be easily modified

//all store Arrays are here 

//Conditions for the test
// coookies to make depends on hours of operations (6pm to 8pm) all locations
//each location will have minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer

//application needs to be easily modified


//Time array 
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
            '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var cookieShopes =['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

//this is an empty array for stores
var emptyArray = [];

//this is where the constructor function lives
function StoreInformation (name, minCustomer, maxCustomer, avgCookie){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
}

var seattle = new StoreInformation('Seattle' , 23, 63, 6.3)
//part of the above

console.log ('seattle store ' + seattle);

// construct for each cookie shope
function cookieShopes (storename){
  seattle = 'Seattle';
  tokyo = 'Tokyo';
  dubai = 'Dubai';
  paris = 'Paris';
  lima = 'Lima'

}

//builds the table row


//gets the id from html and brings it over to Js
var table = document.getElementById ('storedata');
var row = document.createElement ('tr');
table.appendChild(row);

var storeFront;

//creating the cells in the toprows
//first block for store name
storeFront = document.createElement('th');
storeFront.textContent = 'Store Name';
row.appendChild(storeFront);

//second cell for Minimum Customers cell
storeFront = document.createElement('th');
storeFront.textContent = 'Minimum Customer';
row.appendChild(storeFront);

//third cell for Maximium Customers
storeFront = document.createElement('th');
storeFront.textContent = 'Maximium Customers';
row.appendChild(storeFront);

//fourth cell for Averge Sales Per Customer
storeFront = document.createElement('th');
storeFront.textContent = 'Averge Sales Per Customer';
row.appendChild(storeFront);


var boxInfo;
//creating the cells below
//creating data tables here
row = document.createElement('tr');
table.appendChild(row);

var boxInfo = document.createElement('td');
boxInfo.textContent = 0 ;




//row.appendChild(stores);




// console.log (city)
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

//   minCustomer = Math.ceil(minCustomer);
//   maxCustomer = Math.ceil(maxCustomer);

//   return Math.floor(Math.random() * (maxCustomer - minCustomer))+minCustomer;
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
//   var seattleCalculation = seattleNum * seattle.averageCookies;
//   seattleArray.push(seattleCalculation);
// //tokyo
//   var tokyoNum = randomNumberGenerator(tokyo.minCustomer,tokyo.maxCustomer);
//   var tokyoCalculation = tokyoNum * tokyo.averageCookies;
//   tokyoArray.push(tokyoCalculation);
// //dubai
//   var dubaiNum = randomNumberGenerator(dubai.minCustomer,dubai.maxCustomer);
//   var dubaiCalculation = dubaiNum * dubai.averageCookies;
//   dubaiArray.push(dubaiCalculation);
//   //paris
//   var parisNum = randomNumberGenerator(paris.minCustomer,paris.maxCustomer);
//   var parisCalculation = parisNum * paris.averageCookies;
//   parisArray.push(parisCalculation);
//   //paris
//   var limaNum = randomNumberGenerator(lima.minCustomer,lima.maxCustomer);
//   var limaCalculation = limaNum * lima.averageCookies;
//   limaArray.push(limaCalculation);
  



  //store logs
//   console.log('this is the seattle number ' + seattleNum);
//   console.log('this is the seattle calculations ' + seattleCalculation);

//   console.log('this is the seattle number ' + tokyoNum);
//   console.log('this is the seattle calculations ' + tokyoCalculation);

//   console.log('this is the seattle number ' + dubaiNum);
//   console.log('this is the seattle calculations ' + dubaiCalculation);

//   console.log('this is the seattle number ' + parisNum);
//   console.log('this is the seattle calculations ' + parisCalculation);

//   console.log('this is the seattle number ' + limaNum);
//   console.log('this is the seattle calculations ' + limaCalculation);
// }



// //results of the randomized numbers for stores
// console.log('this is the seattle array ' + seattleArray);
// console.log('this is the tokyo array ' + tokyoArray);
// console.log('this is the dubai array ' + dubaiArray);
// console.log('this is the paris array ' + parisArray);
// console.log('this is the lima array ' + limaArray);
