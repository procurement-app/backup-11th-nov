import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule as MyModule  } from "@progress/kendo-angular-charts"; 
import "hammerjs";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedService} from './shared.service';
import { NgbdSortableHeader } from './sortable.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { ChartsModule } from 'ng2-charts';  
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {ChartModule} from '@syncfusion/ej2-angular-charts'



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';





import { MatListModule } from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';



/* #########################  SITE PAGES COMPONENT ###################*/

import { AdminComponent } from './admin/admin.component';

import { Index1Component } from './dashboard/index1/index1.component';




import { NavHeaderComponent } from './elements/nav-header/nav-header.component';
import { HeaderComponent } from './elements/header/header.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { FooterComponent } from './elements/footer/footer.component';










import { ApexComponent } from './charts/apex/apex.component';
import { LineComponent } from './charts/apex/line/line.component';
import { BasicLineChartComponent } from './charts/apex/line/basic-line-chart/basic-line-chart.component';
import { LineChartWithDatalabelsComponent } from './charts/apex/line/line-chart-with-datalabels/line-chart-with-datalabels.component';
import { ZoomableTimeseriesComponent } from './charts/apex/line/zoomable-timeseries/zoomable-timeseries.component';
import { LineWithAnnotationsComponent } from './charts/apex/line/line-with-annotations/line-with-annotations.component';
import { SyncingChartsComponent } from './charts/apex/line/syncing-charts/syncing-charts.component';
import { BrushChartComponent } from './charts/apex/line/brush-chart/brush-chart.component';
import { SteplineChartComponent } from './charts/apex/line/stepline-chart/stepline-chart.component';
import { GradientLineChartComponent } from './charts/apex/line/gradient-line-chart/gradient-line-chart.component';
import { MissingOrNullValuesComponent } from './charts/apex/line/missing-or-null-values/missing-or-null-values.component';
import { DashedLineChartComponent } from './charts/apex/line/dashed-line-chart/dashed-line-chart.component';
import { AreaComponent } from './charts/apex/area/area.component';
import { AreaBasicComponent } from './charts/apex/area/area-basic/area-basic.component';
import { AreaNegativeComponent } from './charts/apex/area/area-negative/area-negative.component';
import { AreaGithubStyleComponent } from './charts/apex/area/area-github-style/area-github-style.component';
import { AreaSplineComponent } from './charts/apex/area/area-spline/area-spline.component';
import { AreaStackedComponent } from './charts/apex/area/area-stacked/area-stacked.component';
import { AreaIrregularTimeseriesComponent } from './charts/apex/area/area-irregular-timeseries/area-irregular-timeseries.component';
import { AreaMissingOrNullValuesComponent } from './charts/apex/area/area-missing-or-null-values/area-missing-or-null-values.component';
import { ColumnComponent } from './charts/apex/column/column.component';
import { ColumnBasicComponent } from './charts/apex/column/column-basic/column-basic.component';
import { ColumnDataLabelsComponent } from './charts/apex/column/column-data-labels/column-data-labels.component';
import { ColumnStackedComponent } from './charts/apex/column/column-stacked/column-stacked.component';
import { ColumnStacked100Component } from './charts/apex/column/column-stacked100/column-stacked100.component';
import { ColumnRotatedLabelsComponent } from './charts/apex/column/column-rotated-labels/column-rotated-labels.component';
import { ColumnNegativeValuesComponent } from './charts/apex/column/column-negative-values/column-negative-values.component';
import { ColumnLoadedChartComponent } from './charts/apex/column/column-loaded-chart/column-loaded-chart.component';
import { ColumnDistributedComponent } from './charts/apex/column/column-distributed/column-distributed.component';
import { ColumnRangeComponent } from './charts/apex/column/column-range/column-range.component';
import { BarComponent } from './charts/apex/bar/bar.component';
import { BarBasicComponent } from './charts/apex/bar/bar-basic/bar-basic.component';
import { BarGroupedComponent } from './charts/apex/bar/bar-grouped/bar-grouped.component';
import { BarStackedComponent } from './charts/apex/bar/bar-stacked/bar-stacked.component';
import { BarStacked100Component } from './charts/apex/bar/bar-stacked100/bar-stacked100.component';
import { BarNegativeValuesComponent } from './charts/apex/bar/bar-negative-values/bar-negative-values.component';
import { BarReversedComponent } from './charts/apex/bar/bar-reversed/bar-reversed.component';
import { BarCustomDataLabelsComponent } from './charts/apex/bar/bar-custom-data-labels/bar-custom-data-labels.component';
import { BarPatternedComponent } from './charts/apex/bar/bar-patterned/bar-patterned.component';
import { BarImagesComponent } from './charts/apex/bar/bar-images/bar-images.component';
import { MixedComponent } from './charts/apex/mixed/mixed.component';
import { MixedLineColumnComponent } from './charts/apex/mixed/mixed-line-column/mixed-line-column.component';
import { MixedMultipleYAxisComponent } from './charts/apex/mixed/mixed-multiple-y-axis/mixed-multiple-y-axis.component';
import { MixedLineAreaComponent } from './charts/apex/mixed/mixed-line-area/mixed-line-area.component';
import { MixedLineColumnAreaComponent } from './charts/apex/mixed/mixed-line-column-area/mixed-line-column-area.component';
import { TimelineComponent } from './charts/apex/timeline/timeline.component';
import { TimelineBasicComponent } from './charts/apex/timeline/timeline-basic/timeline-basic.component';
import { TimelineDistributedComponent } from './charts/apex/timeline/timeline-distributed/timeline-distributed.component';
import { TimelineMultiSeriesComponent } from './charts/apex/timeline/timeline-multi-series/timeline-multi-series.component';
import { TimelineAdvancedComponent } from './charts/apex/timeline/timeline-advanced/timeline-advanced.component';
import { TimelineMultipleSeriesComponent } from './charts/apex/timeline/timeline-multiple-series/timeline-multiple-series.component';
import { CandlestickComponent } from './charts/apex/candlestick/candlestick.component';
import { CandlestickBasicComponent } from './charts/apex/candlestick/candlestick-basic/candlestick-basic.component';
import { CandlestickComboComponent } from './charts/apex/candlestick/candlestick-combo/candlestick-combo.component';
import { CandlestickCategoryComponent } from './charts/apex/candlestick/candlestick-category/candlestick-category.component';
import { CandlestickLineComponent } from './charts/apex/candlestick/candlestick-line/candlestick-line.component';
import { PieComponent } from './charts/apex/pie/pie.component';
import { PieSimpleComponent } from './charts/apex/pie/pie-simple/pie-simple.component';
import { PieDonutComponent } from './charts/apex/pie/pie-donut/pie-donut.component';
import { PieMonochromeComponent } from './charts/apex/pie/pie-monochrome/pie-monochrome.component';
import { PieGradientDonutComponent } from './charts/apex/pie/pie-gradient-donut/pie-gradient-donut.component';
import { SemiDonutComponent } from './charts/apex/pie/semi-donut/semi-donut.component';
import { DonutWithPatternComponent } from './charts/apex/pie/donut-with-pattern/donut-with-pattern.component';
import { RadarComponent } from './charts/apex/radar/radar.component';
import { RadarBasicComponent } from './charts/apex/radar/radar-basic/radar-basic.component';
import { RadarMultipleSeriesComponent } from './charts/apex/radar/radar-multiple-series/radar-multiple-series.component';
import { RadialbarComponent } from './charts/apex/radialbar/radialbar.component';
import { RadialbarBasicComponent } from './charts/apex/radialbar/radialbar-basic/radialbar-basic.component';
import { RadialbarMultipleComponent } from './charts/apex/radialbar/radialbar-multiple/radialbar-multiple.component';
import { RadialbarCustomAngleCircleComponent } from './charts/apex/radialbar/radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import { RadialbarGradientComponent } from './charts/apex/radialbar/radialbar-gradient/radialbar-gradient.component';
import { RadialbarStrokedAngularGaugeComponent } from './charts/apex/radialbar/radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';
import { RadialbarSemiCircleGaugeComponent } from './charts/apex/radialbar/radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import { PolarAreaComponent } from './charts/apex/polar-area/polar-area.component';
import { PolarAreaBasicComponent } from './charts/apex/polar-area/polar-area-basic/polar-area-basic.component';
import { PolarAreaMonochromeComponent } from './charts/apex/polar-area/polar-area-monochrome/polar-area-monochrome.component';
import { BubbleComponent } from './charts/apex/bubble/bubble.component';
import { BubbleSimpleComponent } from './charts/apex/bubble/bubble-simple/bubble-simple.component';
import { Bubble3DComponent } from './charts/apex/bubble/bubble3-d/bubble3-d.component';
import { ScatterComponent } from './charts/apex/scatter/scatter.component';
import { ScatterBasicComponent } from './charts/apex/scatter/scatter-basic/scatter-basic.component';
import { ScatterDatetimeComponent } from './charts/apex/scatter/scatter-datetime/scatter-datetime.component';
import { ScatterImagesComponent } from './charts/apex/scatter/scatter-images/scatter-images.component';
import { HeatmapComponent } from './charts/apex/heatmap/heatmap.component';
import { HeatmapBasicComponent } from './charts/apex/heatmap/heatmap-basic/heatmap-basic.component';
import { HeatmapMultipleColorsComponent } from './charts/apex/heatmap/heatmap-multiple-colors/heatmap-multiple-colors.component';
import { HeatmapMultipleFlippedComponent } from './charts/apex/heatmap/heatmap-multiple-flipped/heatmap-multiple-flipped.component';
import { HeatmapColorRangeComponent } from './charts/apex/heatmap/heatmap-color-range/heatmap-color-range.component';
import { HeatmapRoundedComponent } from './charts/apex/heatmap/heatmap-rounded/heatmap-rounded.component';
import { TreemapComponent } from './charts/apex/treemap/treemap.component';
import { TreemapBasicComponent } from './charts/apex/treemap/treemap-basic/treemap-basic.component';
import { TreemapMultipleSeriesComponent } from './charts/apex/treemap/treemap-multiple-series/treemap-multiple-series.component';
import { TreemapColorRangeComponent } from './charts/apex/treemap/treemap-color-range/treemap-color-range.component';
import { TreemapDistributedComponent } from './charts/apex/treemap/treemap-distributed/treemap-distributed.component';
import { SparklinesComponent } from './charts/apex/sparklines/sparklines.component';
import { SparklinesBasicComponent } from './charts/apex/sparklines/sparklines-basic/sparklines-basic.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { ChartjsLineComponent } from './charts/chartjs/chartjs-line/chartjs-line.component';
import { ChartjsBarComponent } from './charts/chartjs/chartjs-bar/chartjs-bar.component';

import { ChartjsPieComponent } from './charts/chartjs/chartjs-pie/chartjs-pie.component';





















import { Graph1Component } from './elements/dashboard1/graph1/graph1.component';
import { Graph2Component } from './elements/dashboard1/graph2/graph2.component';
import { Graph3Component } from './elements/dashboard1/graph3/graph3.component';
import { Graph4Component } from './elements/dashboard1/graph4/graph4.component';













import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { PurchaseRequisitionComponent } from './purchase-requisition/purchase-requisition.component';
import { ProcurementProfileComponent } from './procurement-profile/procurement-profile.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { NewrequisitionComponent } from './newrequisition/newrequisition.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { RequisitionEditComponent } from './requisition-edit/requisition-edit.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    Index1Component,
   
    
    NavHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
   

    
    ApexComponent,
	LineComponent,
	BasicLineChartComponent,
	LineChartWithDatalabelsComponent,
	ZoomableTimeseriesComponent,
	LineWithAnnotationsComponent,
	SyncingChartsComponent,
	BrushChartComponent,
	SteplineChartComponent,
	GradientLineChartComponent,
	MissingOrNullValuesComponent,
	DashedLineChartComponent,
	AreaComponent,
	AreaBasicComponent,
	AreaNegativeComponent,
	AreaGithubStyleComponent,
	AreaSplineComponent,
	AreaStackedComponent,
	AreaIrregularTimeseriesComponent,
	AreaMissingOrNullValuesComponent,
	ColumnComponent,
	ColumnBasicComponent,
	ColumnDataLabelsComponent,
	ColumnStackedComponent,
	ColumnStacked100Component,
	ColumnRotatedLabelsComponent,
	ColumnNegativeValuesComponent,
	ColumnLoadedChartComponent,
	ColumnDistributedComponent,
	ColumnRangeComponent,
	BarComponent,
	BarBasicComponent,
	BarGroupedComponent,
	BarStackedComponent,
	BarStacked100Component,
	BarNegativeValuesComponent,
	BarReversedComponent,
	BarCustomDataLabelsComponent,
	BarPatternedComponent,
	BarImagesComponent,
	MixedComponent,
	MixedLineColumnComponent,
	MixedMultipleYAxisComponent,
	MixedLineAreaComponent,
	MixedLineColumnAreaComponent,
	TimelineComponent,
	TimelineBasicComponent,
	TimelineDistributedComponent,
	TimelineMultiSeriesComponent,
	TimelineAdvancedComponent,
	TimelineMultipleSeriesComponent,
	CandlestickComponent,
	CandlestickBasicComponent,
	CandlestickComboComponent,
	CandlestickCategoryComponent,
	CandlestickLineComponent,
	PieComponent,
	PieSimpleComponent,
	PieDonutComponent,
	PieMonochromeComponent,
	PieGradientDonutComponent,
	SemiDonutComponent,
	DonutWithPatternComponent,
	RadarComponent,
	RadarBasicComponent,
	RadarMultipleSeriesComponent,
	RadialbarComponent,
	RadialbarBasicComponent,
	RadialbarMultipleComponent,
	RadialbarCustomAngleCircleComponent,
	RadialbarGradientComponent,
	RadialbarStrokedAngularGaugeComponent,
	RadialbarSemiCircleGaugeComponent,
	PolarAreaComponent,
	PolarAreaBasicComponent,
	PolarAreaMonochromeComponent,
	BubbleComponent,
	BubbleSimpleComponent,
	Bubble3DComponent,
	ScatterComponent,
	ScatterBasicComponent,
	ScatterDatetimeComponent,
	ScatterImagesComponent,
	HeatmapComponent,
	HeatmapBasicComponent,
	HeatmapMultipleColorsComponent,
	HeatmapMultipleFlippedComponent,
	HeatmapColorRangeComponent,
	HeatmapRoundedComponent,
	TreemapComponent,
	TreemapBasicComponent,
	TreemapMultipleSeriesComponent,
	TreemapColorRangeComponent,
	TreemapDistributedComponent,
	SparklinesComponent,
	SparklinesBasicComponent,
	ChartjsComponent,
	ChartjsLineComponent,
	ChartjsBarComponent,

	ChartjsPieComponent,
	
    
    
    
    NavHeaderComponent,
   SwitcherComponent,
   
    
   
   
   
  
 
	//NgbdSortableHeader,
   
	NgbdSortableHeader,
	

	

    
    
 
    

  
 
   
   

   
  
   
   
   Graph1Component,
   Graph2Component,
   Graph3Component,
   Graph4Component,
   
  
   
   
  
   
   
   VendorRegisterComponent,
   PurchaseRequisitionComponent,
   ProcurementProfileComponent,
   SupplierManagementComponent,
   NewrequisitionComponent,
   RequisitionComponent,
   RequisitionEditComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
     
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    
    
    MatListModule,
	MatAutocompleteModule,
	MatFormFieldModule,
	MatInputModule,
	MatSlideToggleModule,
	MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    ChartModule,
    MyModule
  ],
   providers: [
	SharedService  
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
