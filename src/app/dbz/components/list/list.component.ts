import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }