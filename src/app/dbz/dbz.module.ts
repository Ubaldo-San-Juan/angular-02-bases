import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';



@NgModule({
  declarations: [
    MainDbzComponent,
    ListComponent,
    AddCaracterComponent
  ],
  exports: [
    MainDbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
