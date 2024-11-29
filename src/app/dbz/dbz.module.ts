import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    MainDbzComponent,
    ListComponent
  ],
  exports: [
    MainDbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
