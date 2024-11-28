import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <hr>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increment()">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="decrement()">-1</button>
  <hr>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  reset(): void {
    this.counter = 10;
  }
}
