//Conditions for the test
// coookies to make depends on hours of operations (6pm to 8pm) all locations
//each location will have minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer

//application needs to be easily modified

//Time array 
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', 
            '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

//Seattle store with 

var seattle = {
//Seattle store with 
  minCustomer : 23,
  maxCustomer : 65,
  averageCookies : 6.3,
}
var seattleArray = [];

function seattleNumberGenerator (minCustomer, maxCustomer){

  minCustomer = Math.ceil(minCustomer);
  maxCustomer = Math.ceil(maxCustomer);

  return Math.floor(Math.random() * (maxCustomer - minCustomer))+minCustomer;
}
seattleNumberGenerator(seattle);
//for loop to place items in array. loop is using the length of the time array above

for (var i =0; i<hours.length; i++){
  var seattleNum = seattleNumberGenerator(seattle.minCustomer,seattle.maxCustomer);
  var seattleCalculation = seattleNum * seattle.averageCookies;
  seattleArray.push(seattleCalculation);

  console.log('this is the seattle number ' + seattleNum);
  console.log('this is the seattle calculations ' + seattleCalculation);
}

//this is all the location arrays


//results of the randomized numbers
console.log('this is the seattle array ' + seattleArray);

//store function call






  
  



//this will be the store hours
// 


// function getRandomInt (max) {
//   return Math.floor(Math.random(0) * Math.floor(1000));
// }
// // object property
// var seattlestore = {
//   minimumHourlyCustomer : "",
//   maximumHourlyCustomer : "",
//   averageCookiesPerCustomer : "",
  
// }


// //use a method of object to generate a random number of customers per hour
// var seattle = {
//   minimumHourlyCustomer : 100,
//   maximumHourlyCustomer : 20,
//   averageCookiesPerCustomer : 3,
   
//     cookiesPerCustomer : function () {
//       return this.minimumHourlyCustomer + '' + this.averageCookiesPerCustomer;

//     }
// };
// console.log ('min. customer ' + minimumHourlyCustomer)
// console.log ('cookies ' +averageCookiesPerCustomer)

// 

// var location = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];


// }
// getRandomInt(800)
// var storeLocation = {
//   location: 'cookies',
//   custumer : 'numberOfCustomers',
//   cookies : 'numberOfCookies',
//   hourOfOperations : 'hour',
//   largeCustomer : 'maximumNumberOfCustomer',
//   smallCustomer : 'minimumNumberOfCustomer',
//   cookiesSold : 'averageCookiesSold',
// }

// for (var i = 0; i < location.length; i++) {
//   // create a store for each location?
// }

// function randomCookies (){
//   let customerNum = max 
// }

// for each day create a new branch of the lab using the following naming conventions class##-feature



//1 store min/max hourly and average cookies per customer in object properties

//2 method of store object to generate a random number of customers per hour use random math generator.

//3 calculate and store simulated amounts of cookies purchased for each hour per location using cookies purchase and the random number of customers

//4 store the results for each location in a seperate array make as a property of the object representing that location


//Display the values of each array as unordered list in browser

//Claculating the sum of these hourly totals output for each location 

//

// locations and time

//string numbers for objects

//shop locatiions



//simulated amount of cookies

//