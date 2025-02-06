import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../../dog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="pet-card">
    <img class="pet-img" src="{{dog.photoUrl}}" alt="Photo of {{dog.name}}">
    <p class="pet-headline">Meet <span class="pet-name">{{dog.name}}</span></p>
    <p class="pet-description"> 
      <span class="pet-name">{{dog.ownerName}}</span> wants you to know this about {{dog.name}}:
      {{dog.description}}
    </p>
    <p class="pet-learn-more"><a href="/details/{{index}}">Learn More</a></p>
  <article>
  `,
  styleUrl: './dogs-list-card.component.css'
})
export class DogsListCardComponent implements OnInit {
  @Input() dog!: Dog;
  @Input() index!: Number;

  constructor() { }

  ngOnInit(): void {
  }
}
