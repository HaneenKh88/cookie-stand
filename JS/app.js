'use strict'

var Hours =  [' 6am ' ,' 7am ' , ' 8am ' , ' 9am ' , ' 10am ' , ' 11am ' , ' 12pm ' , ' 1pm ' , ' 2pm ' , ' 3pm ' , ' 4pm ' , ' 5pm ' , ' 6pm ' , ' 7pm '];

var grandTotal = 0;

function RandomCustNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SalmonCookie (location,MinHourlyCustomers,MaxHourlyCustomers,AvgCookiesPerCustomer)
{
  this.location = location;
  this.MinHourlyCustomers = MinHourlyCustomers;
  this.MaxHourlyCustomers = MaxHourlyCustomers;
  this.AvgCookiesPerCustomer = AvgCookiesPerCustomer;
  this.RandomCustPerHour = [];
  this.AmountsOfCookies = [];
  this.Total = 0;
 

}

SalmonCookie.prototype.getRandomCustPerHour = function()
{
  for(var i =0 ; i < Hours.length; i++)
  {
    this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
  }

}

SalmonCookie.prototype.getAmountOfCookies = function()
{
  for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
          {
            var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
            this.AmountsOfCookies.push(CookiesAmountperhour);
            this.Total = this.Total + CookiesAmountperhour;
            TotalOfSingleHour[j] += this.AmountsOfCookies[j];
            grandTotal += this.AmountsOfCookies[j];
            
          }
 }

 var SalmonCookieTable = document.getElementById('SalmonCookieTable');

 

 SalmonCookie.prototype.Render = function()
 {

    var LocRow = document.createElement('tr');
    var CookiesAmountData = document.createElement('td');
    CookiesAmountData.textContent = this.location;
    LocRow.appendChild(CookiesAmountData);

    for(var i = 0 ; i < this.AmountsOfCookies.length ; i++)
    {
      var CookiesAmountRecord = document.createElement('td');
      CookiesAmountRecord.textContent = this.AmountsOfCookies[i];
      LocRow.appendChild(CookiesAmountRecord);
    

    }

    var TotalCookies = document.createElement('td');
    LocRow.appendChild(TotalCookies);
    TotalCookies.textContent = this.Total;
    SalmonCookieTable.appendChild(LocRow);
    

    
  }




  HeaderRow();

  var TotalOfSingleHour;
  TotalOfSingleHour= [];
  for (var i = 0; i < Hours.length; i++) {
    TotalOfSingleHour.push(0);
    
  }



var Seattle = new SalmonCookie('Seattle',23,65,6.3);
Seattle.getRandomCustPerHour();
Seattle.getAmountOfCookies();
Seattle.Render();

var Tokyo = new SalmonCookie('Tokyo',3,24,1.2);
Tokyo.getRandomCustPerHour();
Tokyo.getAmountOfCookies();
Tokyo.Render();


var Dubai = new SalmonCookie('Dubai',11,38,3.7);
Dubai.getRandomCustPerHour();
Dubai.getAmountOfCookies();
Dubai.Render();


var Paris = new SalmonCookie('Paris',20,38,2.3);
Paris.getRandomCustPerHour();
Paris.getAmountOfCookies();
Paris.Render();



var Lima = new SalmonCookie('Lima',2,16,4.6);
Lima.getRandomCustPerHour();
Lima.getAmountOfCookies();
Lima.Render();


FooterRow();



function HeaderRow()
 {
  
  var TableRow = document.createElement('tr');
  SalmonCookieTable.appendChild(TableRow);
  var EmptyCell = document.createElement('th');
  TableRow.append(EmptyCell);
 
  for (var i = 0; i < Hours.length; i++) {
    var SCTableHeadItem = document.createElement('th');
    SCTableHeadItem.textContent = Hours[i];
    TableRow.appendChild(SCTableHeadItem);
    
  }

  var totalRec = document.createElement('th');
  totalRec.textContent = 'Daily Total';
  TableRow.appendChild(totalRec);
  SalmonCookieTable.appendChild(TableRow);
  
 }



function FooterRow()
{
  var TotalRow = document.createElement('tr');
  SalmonCookieTable.appendChild(TotalRow);

  var TotalCell = document.createElement('th');
  TotalCell.textContent = "Total " + " ";
  TotalRow.appendChild(TotalCell);

  var ColTotalCell;
  for (var i = 0; i < Hours.length; i++) {
    ColTotalCell = document.createElement('th');
    TotalRow.appendChild(ColTotalCell);
    ColTotalCell.textContent = TotalOfSingleHour[i];
  }
 
  var AllTotal = document.createElement('th');
  AllTotal.textContent = grandTotal;
  TotalRow.appendChild(AllTotal);
  
  
}
