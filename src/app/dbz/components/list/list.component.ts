import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    name: 'Trunks',
    power: 2000
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCaracter(id?: string): void{
    //TODO Emitir el ID del personal
    if( !id ) return;

    console.log('Index desde List: ', id);
    this.onDelete.emit( id );
  }

}
