import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { CommonModule } from '@angular/common';
import { DogsListCardComponent } from '../dogs-list-card/dogs-list-card.component';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  template: `
   <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card>
    </article>
  `,
  styleUrl: './dog-list.component.css'
})
export class DogsListComponent implements OnInit {

  constructor(readonly dogsService: DogsService) { }

  ngOnInit(): void {
  }
}
