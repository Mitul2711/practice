import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './directives/custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormComponent } from './components/form/form.component';
import { EjsTableComponent } from './components/ejs-table/ejs-table.component';

import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { EjsChartComponent } from './components/ejs-chart/ejs-chart.component';

import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent,
    FormComponent,
    EjsTableComponent,
    FormArrayComponent,
    EjsChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    GridModule,
    MenuModule,
    ChartModule
  ],
  providers: [PageService, SortService, FilterService, GroupService, CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
