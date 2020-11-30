import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RuleService } from '../Services/rule.service';
import { rule } from '../Services/rule';

import {Chart} from 'Chart.js';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  
  constructor(private ruleService1: RuleService,
    private router: Router) { }
  public isCollapsed = true;
  rules: Array<any>;
  rulex: Observable<rule[]>;
  ruley: Observable<rule[]>;
  rulez: Observable<rule[]>;
  rulejan:Observable<rule[]>;
  rulefev:Observable<rule[]>;
  rulemar:Observable<rule[]>;
  ruleavr:Observable<rule[]>;
  rulemai:Observable<rule[]>;
  rulejui:Observable<rule[]>;
  rulejul:Observable<rule[]>;
  ruleout:Observable<rule[]>;
  rulesep:Observable<rule[]>;
  rulejanw:Observable<rule[]>;
  rulefevw:Observable<rule[]>;
  rulemarw:Observable<rule[]>;
  ruleavrw:Observable<rule[]>;
  rulemaiw:Observable<rule[]>;
  rulejuiw:Observable<rule[]>;
  rulejulw:Observable<rule[]>;
  ruleoutw:Observable<rule[]>;
  rulesepw:Observable<rule[]>;
  clickedEvent = false;
  connect : any;
 

    
  getx() {

    this.clickedEvent = true;
    this.ruleService1.getjan().subscribe(data => {
    this.rulejan = data
    console.log('geting  (number of jan)...');
      console.log(this.rulejanw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getfev().subscribe(data => {
    this.rulefev= data
    console.log('geting  (number of fev)...');
      console.log(this.rulefevw)
      
    });


    this.clickedEvent = true;
    this.ruleService1.getmar().subscribe(data => {
    this.rulemar = data
    console.log('geting  (number of mars)...');
      console.log(this.rulemarw)
      
    });






    this.clickedEvent = true;
    this.ruleService1.getavr().subscribe(data => {
    this.ruleavr= data
    console.log('geting  (number of avr)...');
      console.log(this.ruleavrw)
      
    });


    this.clickedEvent = true;
    this.ruleService1.getmai().subscribe(data => {
    this.rulemai = data
    console.log('geting  (number of ami)...');
      console.log(this.rulemaiw)
      
    });


    this.clickedEvent = true;
    this.ruleService1.getjui().subscribe(data => {
    this.rulejui = data
    console.log('geting  (number of jui)...');
      console.log(this.rulejuiw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getjul().subscribe(data => {
    this.rulejul = data
    console.log('geting  (number of juillet)...');
      console.log(this.rulejulw)
      
    });

    
    this.clickedEvent = true;
    this.ruleService1.getout().subscribe(data => {
    this.ruleout = data
    console.log('geting  (number of out)...');
      console.log(this.ruleoutw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getsep().subscribe(data => {
    this.rulesep = data
    console.log('geting  (number of sep)...');
      console.log(this.rulesepw)
      
    });

 

    this.clickedEvent = true;
    this.ruleService1.getwhritejan().subscribe(data => {
    this.rulejanw = data
    console.log('getwhriteing  (number of jan)...');
      console.log(this.rulejanw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getwhritejan().subscribe(data => {
    this.rulefevw = data
    console.log('getwhriteing  (number of fev)...');
      console.log(this.rulefevw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getwhritemar().subscribe(data => {
    this.rulemarw = data
    console.log('getwhriteing  (number of mars)...');
      console.log(this.rulemarw)
      
    });






    this.clickedEvent = true;
    this.ruleService1.getwhriteavr().subscribe(data => {
    this.ruleavrw= data
    console.log('getwhriteing  (number of avr)...');
      console.log(this.ruleavrw)
      
    });


    this.clickedEvent = true;
    this.ruleService1.getwhritemai().subscribe(data => {
    this.rulemaiw = data
    console.log('getwhriteing  (number of ami)...');
      console.log(this.rulemaiw)
      
    });


    this.clickedEvent = true;
    this.ruleService1.getwhritejui().subscribe(data => {
    this.rulejuiw = data
    console.log('getwhriteing  (number of jui)...');
      console.log(this.rulejuiw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getwhritejul().subscribe(data => {
    this.rulejulw = data
    console.log('getwhriteing  (number of juillet)...');
      console.log(this.rulejulw)
      
    });

    
    this.clickedEvent = true;
    this.ruleService1.getwhriteout().subscribe(data => {
    this.ruleoutw = data
    console.log('getwhriteing  (number of out)...');
      console.log(this.ruleoutw)
      
    });

    this.clickedEvent = true;
    this.ruleService1.getwhritesep().subscribe(data => {
    this.rulesepw = data
    console.log('getwhriteing  (number of sep)...');
      console.log(this.rulesepw)
      
    });






    this.clickedEvent = true;
    this.ruleService1.getx().subscribe(data => {
    this.rulex = data
    console.log('geting x (number of whrite)...');
      console.log(this.rulex)
      
    });
    
    this.clickedEvent = true;
    this.ruleService1.gety().subscribe(data => {
    this.ruley = data
    console.log('geting y (number of delete)...');
      console.log(this.ruley)
      
    });
  
      
    this.clickedEvent = true;
    this.ruleService1.getz().subscribe(data => {
    this.rulez= data
    console.log('geting z (number of update )...');
      console.log(this.rulez)
      
    });









    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [this.rulejanw, this.rulefevw , this.rulemarw, this.ruleavrw, this.rulemaiw, this.rulejuiw, this.rulejulw, this.ruleoutw,  this.rulesepw, 0, 0],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [5, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var dataThird = {
      data: [9, 5, 1, 1, 2, 7, 3, 3, 4, 4, 5, 6],
      fill: false,
      borderColor: '#E7374C',
      backgroundColor: 'transparent',
      pointBorderColor: '#E7374C',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };




    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond,dataThird]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });

    

   
  














    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            
            '#FF1700',
            '#4acccd',
            '#fcc468',
            
          ],
      

          borderWidth: 0,
          data: [this.rulex, this.ruley, this.rulez ]
        }]
      },









      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });
    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
          label: "number",
          backgroundColor: "rgb(81, 202, 207)",
          borderColor: "rgba(2,117,216,1)",
          data: [this.rulejan, this.rulefev, this.rulemar, this.ruleavr, this.rulemai, this.rulejui]
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 25,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });

  }

 


  



  
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit() {
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ["Blue", "Red", "Yellow", "Green"],
        datasets: [{
          data: [12.21, 15.58, 11.25, 8.32],
          backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
      },
    });
    

      













    
        







    






    
        var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
        datasets: [{
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgb(0,191,255)",
          pointRadius: 5,
          pointBackgroundColor: "rgb(0,191,255)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 40000,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    
      




















    
    
  
}

}
