import { Component, OnInit, ViewChild,ViewEncapsulation,ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



interface transaction {
    image: string;
    trans_id?: string;
    trans_date: string;
    from: string;
    user_image: string;
    to: string;
    coin: string;
    coin_image: string;
    amount: string;
    note: string;
    status: string;
    status_class: string;
  }
  
  
  const TRANSACTIONS: transaction[] = [
            {
              image: "assets/images/svg/ic_sell.svg",
              trans_id: "#12415346563475",
              trans_date: '2/5/2020 06:24 AM',
              from: "Vendor 1",
              user_image: "",
              to: "Team",
              coin: "Bitcoin",
              coin_image: "assets/images/coin/btc.svg",
              amount: "5,553",
              note:"",
              status:"CANCELED",
              status_class:"text-danger",
            },
         
           
        
   
      
       
           
          
                  {
                    image: "assets/images/svg/ic_buy.svg",
                    trans_id: "#124153465125511",
                    trans_date: '2/5/2020 06:24 AM',
                    from: "Vendor",
                    user_image: "",
                    to: "Procurement",
                    coin: "Ethereum",
                    coin_image: "assets/images/coin/eth.svg",
                    amount: "987",
                    note:"",
                    status:"PENDING",
                    status_class:"text-light",
                    },
                    {
                      image: "assets/images/svg/ic_buy.svg",
                      trans_id: "#124153465125511",
                      trans_date: '2/5/2020 06:24 AM',
                      from: "Vendor",
                      user_image: "",
                      to: "Procurement",
                      coin: "Ethereum",
                      coin_image: "assets/images/coin/eth.svg",
                      amount: "987",
                      note:"",
                      status:"PENDING",
                      status_class:"text-light",
                      },
                      {
                        image: "assets/images/svg/ic_buy.svg",
                        trans_id: "#124153465125511",
                        trans_date: '2/5/2020 06:24 AM',
                        from: "Vendor",
                        user_image: "",
                        to: "Procurement",
                        coin: "Ethereum",
                        coin_image: "assets/images/coin/eth.svg",
                        amount: "987",
                        note:"",
                        status:"PENDING",
                        status_class:"text-light",
                        },
                        {
                          image: "assets/images/svg/ic_buy.svg",
                          trans_id: "#124153465125511",
                          trans_date: '2/5/2020 06:24 AM',
                          from: "Vendor",
                          user_image: "",
                          to: "Procurement",
                          coin: "Ethereum",
                          coin_image: "assets/images/coin/eth.svg",
                          amount: "987",
                          note:"",
                          status:"PENDING",
                          status_class:"text-light",
                          },
    ];

@Component({
  selector: 'app-graph4',
  templateUrl: './graph4.component.html',
  styleUrls: ['./graph4.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Graph4Component implements OnInit {

    constructor(private modalService: NgbModal) {
        this.updateTransactionListing();
     }
    
    @ViewChild('canvas4', { static: true }) canvas4: ElementRef;

  
  lineChartData: ChartDataSets[] = [
        { 
            data: [10, 25, 20, 40, 30, 40, 30, 50, 20],
            label: 'Payment Stats',
            borderColor: 'transparent',
            pointBackgroundColor: '#AC4CBC',
            pointBorderColor: '#AC4CBC',
            borderWidth:4,
            // borderRadius:'10',
            pointHoverBackgroundColor: '#AC4CBC',
            pointHoverBorderColor: '#AC4CBC',
            // backgroundColor: widgetChartgradientStroke,
        },
  ];

  lineChartLabels: Label[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];

  lineChartOptions = {
    title: {
        display: !1
    },
    tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
        enabled: true
    },
    
    legend: {
        display: !1
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
        mode: "index"
    },
    scales: {
        xAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Month"
            }
        }],
        yAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Value"
            },
            ticks: {
                beginAtZero: !0
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            borderWidth: 0
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
        }
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 171, 45, 1)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

// ngOnInit() {}

  ngOnInit() {
      const gradient = this.canvas4.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 500, 1);
      gradient.addColorStop(0, "rgba(172, 76, 188, 1)");
      gradient.addColorStop(1, "rgba(224, 98, 245, 0.5)");
      
      this.lineChartColors = [
          {
              backgroundColor: '#101D42'
          }
      ];
  }
  payFunc(){
      document.getElementById("id3").style.display = "block";
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  
  page = 1;
  pageSize = 10;
  collectionSize = TRANSACTIONS.length;
  transactions: transaction[];
  
  updateTransactionListing() {
    this.transactions = TRANSACTIONS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
