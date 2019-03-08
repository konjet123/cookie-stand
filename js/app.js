'use strict';

var hoursList = ['6.00 am','7.00 am','8.00 am','9.00 am','10.00 am','11.00 am','12.00 am','1.00 pm',
'2.00 pm','3.00 pm','4.00 pm','5.00 pm','7.00 pm','8.00 pm'];
var Pike1StreetLocation = {
    minimumPerCustomer: 23,
    maximumPerCustomer: 65,
    averagePerCustomer: 6,
    avgCookies:0,
    totalCookies:0,
    name: 'Pike'  
}


function salesDataPerHour(hourTime,minPerCustomer,maxPerCustomer) {
    var locationSalesDetailsForDay = [];
    for (var i=0;i<hourTime.length;i++){
        locationSalesDetailsForDay[i] = Math.round(Math.random() * (maxPerCustomer - minPerCustomer) + 1);
    }
    return locationSalesDetailsForDay;
  }

  var pikeSalesPerDay = salesDataPerHour(hoursList,
    Pike1StreetLocation.minimumPerCustomer,
    Pike1StreetLocation.maximumPerCustomer);


function SalesPerDayWithText(SalesData,appendTextConstant){
    var locationHourlyTotals = [];
    var totalSalesCount = 0;
    for (var i=0;i<SalesData.length;i++){
      locationHourlyTotals[i] = hoursList[i] +': ' + SalesData[i] + appendTextConstant ;
      totalSalesCount = totalSalesCount + SalesData[i];
    }
    locationHourlyTotals[i] = 'Total: ' + totalSalesCount + appendTextConstant;
    return locationHourlyTotals;

}

var pikeSalesData = SalesPerDayWithText(pikeSalesPerDay,' Cookies' );

function averageCookiesPerHour(locationSales) {
    var totalCookies = 0;
    for (var i=0;i<hoursList.length;i++){
      totalCookies =  totalCookies + locationSales[i];
    }
    return totalCookies / (hoursList.length);
  }
  

Pike1StreetLocation.minimumPerCustomer = Math.min.apply(null,pikeSalesPerDay);
Pike1StreetLocation.maximumPerCustomer = Math.max.apply(null,pikeSalesPerDay);
Pike1StreetLocation.averagePerCustomer = Math.round(averageCookiesPerHour(pikeSalesPerDay));

function totalCookiesSalesPerLocation(locationSales) {
    var totalCookiesSold = 0;
    for (var i=0;i<hoursList.length;i++){
      totalCookiesSold =  totalCookiesSold + locationSales[i];
    }
    return totalCookiesSold;
  }

  Pike1StreetLocation.totalCookies = totalCookiesSalesPerLocation(pikeSalesPerDay);
  


  
  function consoleLogs(totalCookies,locationName,averageCookies,minCookiesCustomers,
    maxCookiesCustomers,locationSales) {
    console.log('Location Name :' + locationName);
    console.log('Centre totals: ' + locationSales);
    console.log('Average Cookies per hour :' + averageCookies);
    console.log('Minimum customers count :' + minCookiesCustomers);
    console.log('Maximum customers count :' + maxCookiesCustomers);
    console.log('Total Cookies count :' + totalCookies);
    console.log('    ');
  }

  consoleLogs(Pike1StreetLocation.totalCookies,Pike1StreetLocation.name,Pike1StreetLocation.averagePerCustomer,
    Pike1StreetLocation.minimumPerCustomer,
    Pike1StreetLocation.maximumPerCustomer,pikeSalesPerDay);

    function buildList(hoursDataPerDay,listElements) {
        for (var k = 0; k < hoursDataPerDay.length; k++) {
          var listElement = document.createElement('li');
          listElement.textContent = hoursDataPerDay[k];
          listElements.appendChild(listElement);
        }
      
        return listElements;
      }
    var pikeList = document.getElementById('pike-location');
    buildList(pikeSalesData, pikeList);

  
var seaTacAirportLocation = {
    minimumPerCustomer: 3,
    maximumPerCustomer: 24,
    averagePerCustomer: 1,
    avgCookies:0,
    totalCookies:0,
    name: 'SeaTacAirportLocation'  
}


var seaTacSalesPerDay = salesDataPerHour(hoursList,
    seaTacAirportLocation.minimumPerCustomer,
    seaTacAirportLocation.maximumPerCustomer);
var seaTacSalesData = SalesPerDayWithText(seaTacSalesPerDay,' Cookies' );

seaTacAirportLocation.minimumPerCustomer = Math.min.apply(null,seaTacSalesPerDay);
seaTacAirportLocation.maximumPerCustomer = Math.max.apply(null,seaTacSalesPerDay);
seaTacAirportLocation.averagePerCustomer = Math.round(averageCookiesPerHour(seaTacSalesPerDay));
seaTacAirportLocation.totalCookies = totalCookiesSalesPerLocation(seaTacSalesPerDay);

consoleLogs(seaTacAirportLocation.totalCookies,
    seaTacAirportLocation.name,
    seaTacAirportLocation.averagePerCustomer,
    seaTacAirportLocation.minimumPerCustomer,
    seaTacAirportLocation.maximumPerCustomer,
    seaTacSalesPerDay);

    var seaTacListElement = document.getElementById('seaTac-location')
    buildList(seaTacSalesData, seaTacListElement)

var seattleLocation = {
    minimumPerCustomer: 11,
    maximumPerCustomer: 38,
    averagePerCustomer: 3,
    avgCookies:0,
    totalCookies:0,
    name: 'SeattleLocation'  
}

var seattleSalesPerDay = salesDataPerHour(hoursList,
    seattleLocation.minimumPerCustomer,
    seattleLocation.maximumPerCustomer);
var seattleSalesData = SalesPerDayWithText(seattleSalesPerDay,' Cookies' );

seattleLocation.minimumPerCustomer = Math.min.apply(null,seattleSalesPerDay);
seattleLocation.maximumPerCustomer = Math.max.apply(null,seattleSalesPerDay);
seattleLocation.averagePerCustomer = Math.round(averageCookiesPerHour(seattleSalesPerDay));
seattleLocation.totalCookies = totalCookiesSalesPerLocation(seattleSalesPerDay);

consoleLogs(seattleLocation.totalCookies,
    seattleLocation.name,
    seattleLocation.averagePerCustomer,
    seattleLocation.minimumPerCustomer,
    seattleLocation.maximumPerCustomer,
    seattleSalesPerDay);

    var seattleListElement = document.getElementById('seattle-location');
    buildList(seattleSalesData, seattleListElement);



var capitalHillLocation = {
    minimumPerCustomer: 20,
    maximumPerCustomer: 38,
    averagePerCustomer: 2,
    avgCookies:0,
    totalCookies:0,
    name: 'CapitalHillLocation'  
}

var capitalHillSalesPerDay = salesDataPerHour(hoursList,
    capitalHillLocation.minimumPerCustomer,
    capitalHillLocation.maximumPerCustomer);
var capitalHillSalesData = SalesPerDayWithText(capitalHillSalesPerDay,' Cookies' );

capitalHillLocation.minimumPerCustomer = Math.min.apply(null,capitalHillSalesPerDay);
capitalHillLocation.maximumPerCustomer = Math.max.apply(null,capitalHillSalesPerDay);
capitalHillLocation.averagePerCustomer = Math.round(averageCookiesPerHour(capitalHillSalesPerDay));
capitalHillLocation.totalCookies = totalCookiesSalesPerLocation(capitalHillSalesPerDay);

consoleLogs(capitalHillLocation.totalCookies,
    capitalHillLocation.name,
    capitalHillLocation.averagePerCustomer,
    capitalHillLocation.minimumPerCustomer,
    capitalHillLocation.maximumPerCustomer,
    capitalHillSalesPerDay);

    var capitalHillListElement = document.getElementById('capitalhill-location');
    buildList(capitalHillSalesData, capitalHillListElement);

var alkiLocation = {
    minimumPerCustomer: 2,
    maximumPerCustomer: 16,
    averagePerCustomer: 4,
    avgCookies:0,
    totalCookies:0,
    name: 'AlkiLocation'  
}

var alkiSalesPerDay = salesDataPerHour(hoursList,
    alkiLocation.minimumPerCustomer,
    alkiLocation.maximumPerCustomer);
var alkiSalesData = SalesPerDayWithText(alkiSalesPerDay,' Cookies' );

alkiLocation.minimumPerCustomer = Math.min.apply(null,alkiSalesPerDay);
alkiLocation.maximumPerCustomer = Math.max.apply(null,alkiSalesPerDay);
alkiLocation.averagePerCustomer = Math.round(averageCookiesPerHour(alkiSalesPerDay));
alkiLocation.totalCookies = totalCookiesSalesPerLocation(alkiSalesPerDay);

consoleLogs(alkiLocation.totalCookies,
    alkiLocation.name,
    alkiLocation.averagePerCustomer,
    alkiLocation.minimumPerCustomer,
    alkiLocation.maximumPerCustomer,
    alkiSalesPerDay);

    var alkiListElement = document.getElementById('alki-location');
    buildList(alkiSalesData, alkiListElement);

    function showAboutUs() {
        document.getElementById("specials").style.display="none";
        document.getElementById("hours").style.display="none";
        document.getElementById("location").style.display="none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('aboutus').style.display = "block";
     }
    
     function showLocations() {
        document.getElementById("specials").style.display="none";
        document.getElementById("hours").style.display="none";
        document.getElementById("aboutus").style.display="none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('location').style.display = "block";
     }
    
     function showHours() {
        document.getElementById("specials").style.display="none";
        document.getElementById("location").style.display="none";
        document.getElementById('aboutus').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('hours').style.display = "block";
     }
    
     function showSpecials() {
        document.getElementById("hours").style.display="none";
        document.getElementById("location").style.display="none";
        document.getElementById('aboutus').style.display = "none";
        document.getElementById('contactus').style.display = "none";
        document.getElementById('specials').style.display = "block";
     }
    
     function showContactUs() {
        document.getElementById("hours").style.display="none";
        document.getElementById("location").style.display="none";
        document.getElementById('aboutus').style.display = "none";
        document.getElementById('specials').style.display = "none";
        document.getElementById('contactus').style.display = "block";
     }