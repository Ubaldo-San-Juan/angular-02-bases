import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrl: './add-caracter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCaracterComponent { }
