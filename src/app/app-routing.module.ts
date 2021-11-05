import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { Index1Component } from './dashboard/index1/index1.component';




import { ChartjsComponent } from './charts/chartjs/chartjs.component';













import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { PurchaseRequisitionComponent } from './purchase-requisition/purchase-requisition.component';
import { ProcurementProfileComponent } from './procurement-profile/procurement-profile.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { NewrequisitionComponent } from './newrequisition/newrequisition.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { RequisitionEditComponent } from './requisition-edit/requisition-edit.component';

const routes: Routes = [
                {path: '', redirectTo: 'admin/index', pathMatch: 'full' },
				{
                    path: 'admin', component: AdminComponent, children: [
                        {path: '', component: Index1Component},
                        {path: 'index', component: Index1Component},
                        {path: 'index-1', component: Index1Component},
                        {path: 'dashboard', component: Index1Component},
                       
                      
                        
                      
                       
                       
                        {path: 'chart-chartjs', component: ChartjsComponent},
                        
                        
                       
                    
                        
                        
                        
                        
                        
                        
                      
                        
                        

                        {path: 'vendor-register', component: VendorRegisterComponent},
                        {path: 'purchase-requisition', component: PurchaseRequisitionComponent},
                        {path: 'procurement-profile', component: ProcurementProfileComponent},
                        {path: 'supplier-management', component:SupplierManagementComponent},
                        {path: 'newreq', component:NewrequisitionComponent},
                        {path: 'req', component:RequisitionComponent},
                        {path: 'edit-req', component:RequisitionEditComponent},
                
                    ]
                },
                        
                        
                       
                        
                      

                
                
              ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
