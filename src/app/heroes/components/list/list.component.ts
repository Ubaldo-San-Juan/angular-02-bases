import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Captain America', 'Aquaman'];
  public heroeDeleted?: string;

  deleteLastHeroe(): void{
    this.heroeDeleted = this.heroesNames.pop();
  }
}
