import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  heroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //Cambiar el nombre y la edad
  changeName(newName: string): void {
    this.name = newName;
  }

  changeAge(newAge: number): void {
    this.age = newAge;
  }

  resetValues(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}
