'use strict'

var Hours =  [' 6am ' ,' 7am ' , ' 8am ' , ' 9am ' , ' 10am ' , ' 11am ' , ' 12pm ' , ' 1pm ' , ' 2pm ' , ' 3pm ' , ' 4pm ' , ' 5pm ' , ' 6pm ' , ' 7pm '];
var Branchs = [Seattle , Tokyo , Dubai , Paris , Lima];

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
  Branchs.push(this);
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
          }
 }

 var SalmonCookieTable = document.getElementById('SalmonCookieTable');

 function HeaderRow()
 {
  
  var TableRow = document.createElement('tr')
  var EmptyCell = document.createElement('th');
  TableRow.append(EmptyCell);
 
  for (var i = 0; i < Hours.length; i++) {
    var SCTableHeadItem = document.createElement('th');
    SCTableHeadItem.textContent = Hours[i];
    TableRow.appendChild(SCTableHeadItem);
    
  }

  SCTableHeadItem = document.createElement('th');
  SCTableHeadItem.textContent = 'Daily Total';
  TableRow.appendChild(SCTableHeadItem);
  SalmonCookieTable.appendChild(TableRow);
  
 }

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
    TotalCookies.textContent = ' ';
    TotalCookies.textContent = this.Total;
    LocRow.appendChild(TotalCookies);
    SalmonCookieTable.appendChild(LocRow);
    

    
  }


function FooterRow()
{
  var TotalRow = document.createElement('tr');
  TotalRow.textContent = "Total";
  SalmonCookieTable.appendChild(TotalRow);

  var AllTotal = 0;
  for(var i = 0 ; i < Hours.length ; i++)
  {
    var TotalPerHour = 0;
    for(var j = 0 ; j < Branchs.length ; j++)
    {
      TotalPerHour = TotalPerHour + Branchs[j].AmountsOfCookies[i];
      AllTotal += Branchs[j].AmountsOfCookies[i];

      console.log(AllTotal);
    }

    var LastRowData = document.createElement('td');
    LastRowData.textContent = TotalPerHour;
    TotalRow.appendChild(LastRowData);


  }

  LastRowData = document.createElement('td');
  LastRowData.textContent = AllTotal;
  TotalRow.appendChild(LastRowData);
}


  HeaderRow();

var Seattle = new SalmonCookie('Seattle','23','65','6.3');
Seattle.getRandomCustPerHour();
Seattle.getAmountOfCookies();
Seattle.Render();

var Tokyo = new SalmonCookie('Tokyo','3','24','1.2');
Tokyo.getRandomCustPerHour();
Tokyo.getAmountOfCookies();
Tokyo.Render();


var Dubai = new SalmonCookie('Dubai','11','38','3.7');
Dubai.getRandomCustPerHour();
Dubai.getAmountOfCookies();
Dubai.Render();


var Paris = new SalmonCookie('Paris','20','38','2.3');
Paris.getRandomCustPerHour();
Paris.getAmountOfCookies();
Paris.Render();



var Lima = new SalmonCookie('Lima','2','16','4.6');
Lima.getRandomCustPerHour();
Lima.getAmountOfCookies();
Lima.Render();


FooterRow();


  /*var LocList = document.createElement('ul');
  LocationSec.appendChild (LocList);

  var AmountCookiesList;
  for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
  {
    AmountCookiesList = document.createElement('li');
    AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
    LocList.appendChild(AmountCookiesList);

  }
  var AmountCookiesList = document.createElement('li');
  AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
  LocList.appendChild(AmountCookiesList);*/

 

/*var Seattle = {
    location: 'Seattle',
    MinHourlyCustomers: 23,
    MaxHourlyCustomers: 65,
    AvgCookiesPerCustomer: 	6.3,
    RandomCustPerHour: [],
    AmountsOfCookies : [],
    Total : 0,

  getRandomCustPerHour: function () 
  {
      
          for(var i =0 ; i < Hours.length; i++)
          {
            this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
          }

         
    },
    
    getAmountOfCookies: function ()
    {
      //this.getRandomCustPerHour();
      for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
          {
            var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
            this.AmountsOfCookies.push(CookiesAmountperhour);
            this.Total = this.Total + CookiesAmountperhour;
          }
        },


    Render: function ()
   {
      var MainDiv = document.getElementById('location');
      var LocationSec = document.createElement('section');
      MainDiv.appendChild(LocationSec);
      var LocName = document.createElement('h2');
      LocName.textContent = this.location;
      LocationSec.appendChild(LocName);
      var LocList = document.createElement('ul');
      LocationSec.appendChild (LocList);

      var AmountCookiesList;
      for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
      {
        AmountCookiesList = document.createElement('li');
        AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
        LocList.appendChild(AmountCookiesList);

      }
      var AmountCookiesList = document.createElement('li');
      AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
      LocList.appendChild(AmountCookiesList);

   }

  };
 
  
  var Tokyo = {
    location: 'Tokyo',
    MinHourlyCustomers: 3,
    MaxHourlyCustomers: 24,
    AvgCookiesPerCustomer: 	1.2,
    RandomCustPerHour: [],
    AmountsOfCookies : [],
    Total : 0,

    getRandomCustPerHour: function () 
    {
        
            for(var i =0 ; i < Hours.length; i++)
            {
              this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
            }
  
           
      },
      
      getAmountOfCookies: function ()
      {
        //this.getRandomCustPerHour();
        for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
            {
              var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
              this.AmountsOfCookies.push(CookiesAmountperhour);
              this.Total = this.Total + CookiesAmountperhour;
            }
          },
  
  
      Render: function ()
     {
        var MainDiv = document.getElementById('location');
        var LocationSec = document.createElement('section');
        MainDiv.appendChild(LocationSec);
        var LocName = document.createElement('h2');
        LocName.textContent = this.location;
        LocationSec.appendChild(LocName);
        var LocList = document.createElement('ul');
        LocationSec.appendChild (LocList);
  
        var AmountCookiesList;
        for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
        {
          AmountCookiesList = document.createElement('li');
          AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
          LocList.appendChild(AmountCookiesList);
  
        }
        var AmountCookiesList = document.createElement('li');
        AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
        LocList.appendChild(AmountCookiesList);
  
     }
  };



  //Tokyo.WriteFun()

  var Dubai = {
    location: 'Dubai',
    MinHourlyCustomers: 11,
    MaxHourlyCustomers: 38,
    AvgCookiesPerCustomer: 	3.7,
    RandomCustPerHour: [],
    AmountsOfCookies : [],
    Total : 0,

    getRandomCustPerHour: function () 
    {
        
            for(var i =0 ; i < Hours.length; i++)
            {
              this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
            }
  
           
      },
      
      getAmountOfCookies: function ()
      {
        //this.getRandomCustPerHour();
        for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
            {
              var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
              this.AmountsOfCookies.push(CookiesAmountperhour);
              this.Total = this.Total + CookiesAmountperhour;
            }
          },
  
  
      Render: function ()
     {
        var MainDiv = document.getElementById('location');
        var LocationSec = document.createElement('section');
        MainDiv.appendChild(LocationSec);
        var LocName = document.createElement('h2');
        LocName.textContent = this.location;
        LocationSec.appendChild(LocName);
        var LocList = document.createElement('ul');
        LocationSec.appendChild (LocList);
  
        var AmountCookiesList;
        for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
        {
          AmountCookiesList = document.createElement('li');
          AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
          LocList.appendChild(AmountCookiesList);
  
        }
        var AmountCookiesList = document.createElement('li');
        AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
        LocList.appendChild(AmountCookiesList);
  
     }
    
  };

  //Dubai.WriteFun()


  var Paris = {
    location: 'Paris',
    MinHourlyCustomers: 20,
    MaxHourlyCustomers: 38,
    AvgCookiesPerCustomer: 	2.3,
    RandomCustPerHour: [],
    AmountsOfCookies : [],
    Total : 0,
    getRandomCustPerHour: function () 
    {
        
            for(var i =0 ; i < Hours.length; i++)
            {
              this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
            }
  
           
      },
      
      getAmountOfCookies: function ()
      {
        //this.getRandomCustPerHour();
        for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
            {
              var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
              this.AmountsOfCookies.push(CookiesAmountperhour);
              this.Total = this.Total + CookiesAmountperhour;
            }
          },
  
  
      Render: function ()
     {
        var MainDiv = document.getElementById('location');
        var LocationSec = document.createElement('section');
        MainDiv.appendChild(LocationSec);
        var LocName = document.createElement('h2');
        LocName.textContent = this.location;
        LocationSec.appendChild(LocName);
        var LocList = document.createElement('ul');
        LocationSec.appendChild (LocList);
  
        var AmountCookiesList;
        for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
        {
          AmountCookiesList = document.createElement('li');
          AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
          LocList.appendChild(AmountCookiesList);
  
        }
        var AmountCookiesList = document.createElement('li');
        AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
        LocList.appendChild(AmountCookiesList);
  
     }
  };

  //Paris.WriteFun()


  var Lima = {
    location: 'Lima',
    MinHourlyCustomers: 2,
    MaxHourlyCustomers: 16,
    AvgCookiesPerCustomer: 4.6,
    RandomCustPerHour: [],
    AmountsOfCookies : [],
    Total : 0,

    getRandomCustPerHour: function () 
  {
      
          for(var i =0 ; i < Hours.length; i++)
          {
            this.RandomCustPerHour.push(RandomCustNumber(this.MinHourlyCustomers,this.MaxHourlyCustomers));
          }

         
    },
    
    getAmountOfCookies: function ()
    {
      //this.getRandomCustPerHour();
      for(var j =0 ; j < this.RandomCustPerHour.length ; j++)
          {
            var CookiesAmountperhour = Math.ceil(this.RandomCustPerHour[j] * this.AvgCookiesPerCustomer);
            this.AmountsOfCookies.push(CookiesAmountperhour);
            this.Total = this.Total + CookiesAmountperhour;
          }
        },


    Render: function ()
   {
      var MainDiv = document.getElementById('location');
      var LocationSec = document.createElement('section');
      MainDiv.appendChild(LocationSec);
      var LocName = document.createElement('h2');
      LocName.textContent = this.location;
      LocationSec.appendChild(LocName);
      var LocList = document.createElement('ul');
      LocationSec.appendChild (LocList);

      var AmountCookiesList;
      for(var k = 0 ; k < this.AmountsOfCookies.length ; k++ )
      {
        AmountCookiesList = document.createElement('li');
        AmountCookiesList.textContent = Hours[k] + ' : ' + this.AmountsOfCookies[k] + ' cookies ';
        LocList.appendChild(AmountCookiesList);

      }
      var AmountCookiesList = document.createElement('li');
      AmountCookiesList.textContent = ' Total: ' + this.Total + ' cookies.';
      LocList.appendChild(AmountCookiesList);

   }

  };

  Seattle.getRandomCustPerHour();
  Seattle.getAmountOfCookies();
  Seattle.Render();

  Tokyo.getRandomCustPerHour();
  Tokyo.getAmountOfCookies();
  Tokyo.Render();

  Dubai.getRandomCustPerHour();
  Dubai.getAmountOfCookies();
  Dubai.Render();

  Paris.getRandomCustPerHour();
  Paris.getAmountOfCookies();
  Paris.Render();

  Lima.getRandomCustPerHour();
  Lima.getAmountOfCookies();
  Lima.Render();*/

  


  
