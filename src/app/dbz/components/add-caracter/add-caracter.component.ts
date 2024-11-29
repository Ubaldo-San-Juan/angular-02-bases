import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-caracter',
  template: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCaracterComponent { }
