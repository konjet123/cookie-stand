'use strict';
var data = [];
var hoursList = ['6.00 am', '7.00 am', '8.00 am', '9.00 am', '10.00 am', '11.00 am', '12.00 am', '1.00 pm',
  '2.00 pm', '3.00 pm', '4.00 pm', '5.00 pm', '7.00 pm', '8.00 pm'];
var locationsData = [];

var table = document.getElementById('shell');
//var table = document.getElementById('cookieResults');
var tHeaderRow = document.getElementById('tHeading');


var salesFormElement = document.getElementById('SalesInputForm');

function LocationsData(name,
  minimumPerCustomer,
  maximumPerCustomer,
  averagePerCustomer,
  avgCookies,
  totalCookies
) {
  this.name = name;
  this.minimumPerCustomer = minimumPerCustomer;
  this.maximumPerCustomer = maximumPerCustomer;
  this.averagePerCustomer = averagePerCustomer;
  this.avgCookies = avgCookies;
  this.totalCookies = totalCookies;
  this.locationSalesPerDay = function () {
    var locationSalesDetailsForDay = [];
    for (var i = 0; i < hoursList.length; i++) {
      locationSalesDetailsForDay[i] = Math.round(Math.random() *
        (this.maximumPerCustomer - this.minimumPerCustomer) + 1);
    }
    return locationSalesDetailsForDay;
  };
  this.locationSalesPerDayDisplayData = function () {
    var locationHourlyTotals = [];
    var totalSalesCount = 0;
    var appendTextConstant = ' Cookies';
    for (var i = 0; i < this.locationSalesPerDay.length; i++) {
      locationHourlyTotals[i] = hoursList[i] + ': ' + this.locationSalesPerDay()[i] + appendTextConstant;
      totalSalesCount = totalSalesCount + this.locationSalesPerDay()[i];
    }
    locationHourlyTotals[i] = 'Total: ' + totalSalesCount + appendTextConstant;
    return locationHourlyTotals;
  };

  this.avgCookies = function () {
    var totalCookies = 0;
    for (var i = 0; i < hoursList.length; i++) {
      totalCookies = totalCookies + this.locationSalesPerDay()[i];
    }
    return Math.round(totalCookies / (hoursList.length));
  };

  this.totalCookies = function () {
    var totalCookiesSold = 0;
    for (var i = 0; i < hoursList.length; i++) {
      totalCookiesSold = totalCookiesSold + this.locationSalesPerDay()[i];
    }
    return totalCookiesSold;
  };
}

makeHeaderRow();
render(data);
var Pike1StreetLocation = new LocationsData('Pike', 23, 65, 6, 0, 0);
var seaTacAirportLocation = new LocationsData('SeaTacAirportLocation', 3, 24, 1, 0, 0);
var seattleLocation = new LocationsData('SeattleLocation', 11, 38, 3, 0, 0);
var capitalHillLocation = new LocationsData('CapitalHillLocation', 20, 38, 2, 0, 0);
var AlkiLocation = new LocationsData('AlkiLocation', 2, 16, 4, 0, 0);

locationsData.push(Pike1StreetLocation, seaTacAirportLocation, seattleLocation, capitalHillLocation, AlkiLocation);

renderSalesData(locationsData);

function formData(event) {
  event.preventDefault();

  var locationName = event.target.inputIDForLocation.value;
  var minCustomer = event.target.inputIDForMinimumHourlyCustomers.value;
  var maxCustomer = event.target.inputIDForMaximumHourlyCustomers.value;
  var avgCookieCount = event.target.inputIDForAverageCookie.value;

  locationsData.push(new LocationsData(locationName, minCustomer, maxCustomer, avgCookieCount, 0, 0));

  if (locationName.length > 0 && locationsData.length > 0) {
    if ((locationsData.length > 0) && (locationsData.length < 2)) {
      makeHeaderRow();
      render(data);
    }
    var tablelen = document.getElementById('shell').rows.length;
    for (var i = -1; i < tablelen; i++) {
      if (tablelen > 2) {
        document.getElementById('shell').deleteRow(-1);
      }
      if (document.getElementById('shell').rows.length > i) {
        document.getElementById('shell').deleteRow(i);
      }
    }
    renderSalesData(locationsData);
    salesFormElement.reset();

  }
}


function makeHeaderRow() {

  data.push('<td>' + 'Location Name' + '</td>');
  for (var i = 0; i < hoursList.length; i++) {
    data.push(
      '<td>' + hoursList[i] + '</td>'
    );
  }
  data.push('<td>' + 'Daily Location Total' + '</td>');

}

function render(tableRow) {
  for (var j = 0; j < tableRow.length; j++) {
    var newColumn = document.createElement('td');
    newColumn.innerHTML = tableRow[j];
    if (table !== null)
      tHeaderRow.appendChild(newColumn);
  }
}


function renderSalesData(tableRow) {
  if (table !== null) {
    var hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var tr = 0; tr < tableRow.length; tr++) {
      var newRow = document.createElement('tr');
      var dailyCount = 0;
      var hourCount = 0;
      newRow.innerHTML = tableRow[tr].name;
      table.appendChild(newRow);
      for (var td = 0; td < data.length - 2; td++) {
        var newColumn = document.createElement('td');
        hourCount = tableRow[tr].locationSalesPerDay()[td];
        dailyCount = dailyCount + hourCount;
        newColumn.innerHTML = hourCount;
        hourlyTotal[td] = hourlyTotal[td] + hourCount;
        newRow.appendChild(newColumn);
      }
      var newTotalColumn = document.createElement('td');
      newTotalColumn.innerHTML = dailyCount;
      newRow.appendChild(newTotalColumn);
      hourlyTotal[td] = hourlyTotal[td] + dailyCount;
    }
    makeFooterRow(hourlyTotal);
  }
}


function makeFooterRow(hourlyTotal) {

  document.getElementById('cookieResults').deleteTFoot();
  var tfooter = document.getElementById('cookieResults').createTFoot();
  var newColumn = document.createElement('td');
  newColumn.innerHTML = 'Totals';
  tfooter.appendChild(newColumn);
  for (var i = 0; i <= hoursList.length; i++) {
    newColumn = document.createElement('td');
    newColumn.innerHTML = hourlyTotal[i];
    tfooter.appendChild(newColumn);
  }
}


function showAboutUs() {
  document.getElementById('specials').style.display = 'none';
  document.getElementById('hours').style.display = 'none';
  document.getElementById('location').style.display = 'none';
  document.getElementById('contactus').style.display = 'none';
  document.getElementById('aboutus').style.display = 'block';
}

function showLocations() {
  document.getElementById('specials').style.display = 'none';
  document.getElementById('hours').style.display = 'none';
  document.getElementById('aboutus').style.display = 'none';
  document.getElementById('contactus').style.display = 'none';
  document.getElementById('location').style.display = 'block';
}

function showHours() {
  document.getElementById('specials').style.display = 'none';
  document.getElementById('location').style.display = 'none';
  document.getElementById('aboutus').style.display = 'none';
  document.getElementById('contactus').style.display = 'none';
  document.getElementById('hours').style.display = 'block';
}

function showContactUs() {
  document.getElementById('hours').style.display = 'none';
  document.getElementById('location').style.display = 'none';
  document.getElementById('aboutus').style.display = 'none';
  document.getElementById('specials').style.display = 'none';
  document.getElementById('contactus').style.display = 'block';
}

salesFormElement.addEventListener('submit', formData);
