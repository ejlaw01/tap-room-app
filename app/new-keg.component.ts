import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: "new-keg",
  template:`
  <h2>New Keg:</h2>
  <input #name placeholder="Name">
  <input #brand placeholder="Brand">
  <input #price placeholder="Price">
  <input #alcohol placeholder="Alcohol">
  <button class="button" (click)=
  "addNewKeg(name.value, brand.value, price.value, alcohol.value);
  name.value = '';
  brand.value = '';
  price.value = '';
  alcohol.value = '';
  ">Add Keg</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addNewKeg(name: string, brand: string, price: number, alcohol: number) {
    var newKegToAdd = new Keg(name, brand, price, alcohol);
    console.log(newKegToAdd);
    this.newKegSender.emit(newKegToAdd);
  }
}
