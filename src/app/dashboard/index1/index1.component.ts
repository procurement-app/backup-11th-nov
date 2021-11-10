

import { Component, OnInit, ViewChild,ViewEncapsulation,ElementRef } from '@angular/core';
import * as moment from "moment";

import { Color, Label } from 'ng2-charts';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexTooltip,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTheme,
  
} from "ng-apexcharts";
import { Content } from '@angular/compiler/src/render3/r3_ast';
import * as Aos from 'aos';


export type ChartOpts = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
  tooltip: ApexTooltip;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};






export type ChartOp = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  
};


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  labels: any;
  fill: any;
  stroke: ApexStroke;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  
  
  legend: ApexLegend;
  
  
  
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};



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
			to: "Team",
			coin: "Ethereum",
			coin_image: "assets/images/coin/eth.svg",
			amount: "12,768",
			note:"",
			status:"COMPLETED",
			status_class:"text-success",
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
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css'],
  encapsulation: ViewEncapsulation.None,
 
})
export class Index1Component implements OnInit {
   mouseTarget:string;
   modell: NgbDateStruct;
   
  public model = [
    {
      stat: "Impressions ",
      count: 298235,
      color: "#0e5a7e",
    },
    {
      stat: "Clicks",
      count: 256854,
      color: "#166f99",
    },
    {
      stat: "Unique Visitors",
      count: 220022,
      color: "#2185b4",
    },
    {
      stat: "Downloads",
      count: 190374,
      color: "#319fd2",
    },
    {
      stat: "Purchases",
      count: 150392,
      color: "#3eaee2",
    },
    {
      stat: "Purchases",
      count: 120392,
      color: "#3eaee2",
    },
  ];
  
 
  @ViewChild("chart",) chart: ChartComponent;
  @ViewChild("canvas",) canvas:ElementRef;
    closeResult: string;
  
  
  public chartOptions: Partial<ChartOptions>;
  public chartOpts: Partial<ChartOpts>;
  public chartOp: Partial<ChartOp>;
  
  constructor(private modalService: NgbModal) {

    this.updateTransactionListing();

    

 


    this.chartOp = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: '250',
        
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        colors: ['#89D2DC', '#8584DB', '#101D42','#232ED1','#0D1317']
      },
      legend: {
        
     
      },
      title: {
        text: "",
        align: 'center',
        style: {
          fontSize:  '25px',
          fontWeight:  '100',
          fontFamily:  ' lato',
          color:  '#000'
        },
    margin: 10,
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#A52A2A',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
      },
      tooltip:{
        enabled: false
      },
    
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: '250'
            },

            
            legend: {
              position: "bottom",
              show: false,
            },
            dataLabels: {
                enabled: false,
            },
          }
        }
      ]
    };



    this.chartOptions = {
      series: [44, 55, 41],
      chart: {
        width: '250',
        type: "donut",
        events: {
          click: function() {
            
                     document.getElementById('ide').style.display = "block"   
                    
            
               
             
          }
        },
        dropShadow: {
          enabled: true,
         color: "",
          top: -1,
          left: 3,
          blur: 3,
          
          opacity: 0.2
        }
      },
      
      stroke: {
        width: 0
      },
      
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["Waiting Confirmation", "Processing", "Completed"],
    
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0
        }
      },
      fill: {
        colors: ['#89D2DC', '#8584DB', '#232ED1'],
        
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
   
      theme: {
      

      },
      title: {
        text: "",
        align: 'center',
        style:{
          fontFamily: 'lato',
          fontWeight: '100',
          fontSize: '25px',
          color: '#000'

        }
        
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: '250'
            },
            legend: {
              position: "bottom",
              show: false,
            },
            dataLabels: {
                enabled: false,
            },
          }
        }
      ]
    };
    
  }

  

 
natFunction(){
  document.getElementById("exampleModal").style.display = "block";
}




  

/*  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }*/
  newFunc(){
    document.getElementById('exampleModal').style.display = "none"
  }

 

  xFunc(){
    document.getElementById('ide').style.display = "none"
  }


  yFunc(){
    document.getElementById('id1').style.display = "none"
  }

  zFunc(){
    document.getElementById('id2').style.display = "none"
  }
  
  aFunc(){
    document.getElementById('id3').style.display = "none"
  }


  clickerFunction(){
    document.getElementById("drop").style.display = "block"
  }

  alertFn(){
    alert("hello")
    document.getElementById("deznav").style.opacity = "1"
  }

 


  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }


  openLg(longContent) {
    this.modalService.open(longContent, { size: 'lg' });
  }


  myFunction(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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


  

  
  
  
  

  ngOnInit(): void {
    
  }

}
