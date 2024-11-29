import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainDbzComponent
  ],
  exports: [
    MainDbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
