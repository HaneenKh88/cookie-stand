'use strict'

var Hours =  ['6am' ,'7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' ];
var Branchs = [Seattle , Tokyo , Dubai , Paris , Lima];

function RandomCustNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



var Seattle = {
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
  Lima.Render();

  

  
  


  

  

  