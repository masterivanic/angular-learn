import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted? : boolean = false;
  id = 0

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true
    console.log(this.model)
  }

  
  newHero() {
    this.id++
    this.model = new Hero(this.id, '', '');
  }

}
