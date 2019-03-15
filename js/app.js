'use strict';
var data = [];

var hoursList = ['6.00 am','7.00 am','8.00 am','9.00 am','10.00 am','11.00 am','12.00 am','1.00 pm',
'2.00 pm','3.00 pm','4.00 pm','5.00 pm','7.00 pm','8.00 pm'];

var locationsData = [];

function LocationsData(name, 
    minimumPerCustomer, 
    maximumPerCustomer,
    averagePerCustomer,
    avgCookies,
    totalCookies
    ) {
        this.name = name
        this.minimumPerCustomer = minimumPerCustomer;
        this.maximumPerCustomer = maximumPerCustomer;
        this.averagePerCustomer = averagePerCustomer;
        this.avgCookies = avgCookies;
        this.totalCookies = totalCookies;
        this.locationSalesPerDay = function()
        {
            var locationSalesDetailsForDay = [];
            for (var i=0;i<hoursList.length;i++){
                locationSalesDetailsForDay[i] = Math.round(Math.random() * 
                (this.maximumPerCustomer- this.minimumPerCustomer) + 1);
            }
            return locationSalesDetailsForDay;  
        }
        this.locationSalesPerDayDisplayData = function()
        {
            var locationHourlyTotals = [];
            var totalSalesCount = 0;
            var appendTextConstant = ' Cookies';
            for (var i=0;i<this.locationSalesPerDay.length;i++){
              locationHourlyTotals[i] = hoursList[i] +': ' + this.locationSalesPerDay()[i] + appendTextConstant ;
              totalSalesCount = totalSalesCount + this.locationSalesPerDay()[i];
            }
            locationHourlyTotals[i] = 'Total: ' + totalSalesCount + appendTextConstant;
            return locationHourlyTotals;
        }
    
        this.avgCookies = function()
        {
            var totalCookies = 0;
             for (var i=0;i<hoursList.length;i++){
                totalCookies =  totalCookies + this.locationSalesPerDay()[i];
            }
            return Math.round(totalCookies / (hoursList.length));
        }

        this.totalCookies = function()
        {
            var totalCookiesSold = 0;
            for (var i=0;i<hoursList.length;i++){
                totalCookiesSold =  totalCookiesSold + this.locationSalesPerDay()[i];
            }
            return totalCookiesSold;
        }              
  }

var Pike1StreetLocation = new LocationsData('Pike', 23, 65, 6, 0, 0);
var seaTacAirportLocation = new LocationsData('SeaTacAirportLocation', 3, 24, 1, 0, 0);
var seattleLocation = new LocationsData('SeattleLocation', 11, 38, 3, 0, 0);
var capitalHillLocation = new LocationsData('CapitalHillLocation', 20, 38, 2, 0, 0);
var AlkiLocation = new LocationsData('AlkiLocation', 2, 16, 4, 0, 0);

locationsData.push(Pike1StreetLocation,seaTacAirportLocation,seattleLocation,capitalHillLocation,AlkiLocation);


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

    
    var table = document.getElementById('shell');

    //Create td elements data
function makeTable(locations,firstElement,lastElement){
  var finalData ;
  for(var i =0;i<locations.length;i++){
      if(i===0){
          finalData ='<th>'+firstElement+'</th>';
      }
      finalData = finalData+'<td>'+locations[i]+'</td>';
  }
  tableData.push(finalData+'<td>'+lastElement+'</td>');
}
      var table = document.getElementById('cookieResults');
      var tRow = document.getElementById('tHeading');
    function makeHeaderRow() {     
        
        data.push('<td>' + 'Location Name' + '</td>')
        for (var i=0; i < hoursList.length; i++) {
          data.push(
            '<td>' + hoursList[i] + '</td>' 
          )
        }
        data.push('<td>' + 'Daily Location Total' + '</td>')
        
      }

      function makeFooterRow(hourlyTotal) {     
        var newColumn = document.createElement('td');
        newColumn.innerHTML = 'Totals' ;
        table.appendChild(newColumn);
        for (var i=0; i <= hoursList.length; i++) {          
          newColumn = document.createElement('td');
          newColumn.innerHTML = hourlyTotal[i];
          table.appendChild(newColumn);
        }        
      }
      
      function render(tableRow) {
        for (var j=0; j < tableRow.length; j++) {
          var newColumn = document.createElement('td');
          newColumn.innerHTML = tableRow[j];
          if (table!=null)
          table.appendChild(newColumn);
        }
      }
       
            
      function renderSalesData(tableRow) {
        if (table!=null)
        {
          var hourlyTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
              for (var tr=0; tr < tableRow.length; tr++) {
                var newRow = document.createElement('tr');
                  var dailyCount=0;
                  var hourCount=0;
                  newRow.innerHTML = tableRow[tr].name;
                  table.appendChild(newRow);
                  for (var td=0; td < data.length-2; td++) {
                    var newColumn = document.createElement('td');
                    hourCount = tableRow[tr].locationSalesPerDay()[td];
                    dailyCount = dailyCount + hourCount;
                    newColumn.innerHTML = hourCount ;
                    hourlyTotal[td]=hourlyTotal[td]+hourCount;
                    newRow.appendChild(newColumn);
                  }
                  var newColumn = document.createElement('td');
                  newColumn.innerHTML = dailyCount;
                  newRow.appendChild(newColumn);
                  hourlyTotal[td]=hourlyTotal[td]+dailyCount;
              }
              makeFooterRow(hourlyTotal);
        } 
      }

      makeHeaderRow();
      render(data);
      renderSalesData(locationsData)


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

     function showContactUs() {
        document.getElementById("hours").style.display="none";
        document.getElementById("location").style.display="none";
        document.getElementById('aboutus').style.display = "none";
        document.getElementById('specials').style.display = "none";
        document.getElementById('contactus').style.display = "block";
     }