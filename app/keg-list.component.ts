import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
    <h3>{{ currentKeg.brand + " " + currentKeg.name }}</h3>
    <button class="button" (click)="lessOne(currentKeg)">Drink a Beer</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  lessOne(kegToEdit: Keg) {
    kegToEdit.pintsLeft -= 1;
    console.log(kegToEdit.pintsLeft);
  }
}
