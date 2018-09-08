import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

//You are importing Component and the OnInIt symbol and the Input symbol.

//NOTE: OnInIt is imported so you can use ngOnInIt(){} It is 'a callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.' no parameters

//NOTE: Input is for the @input decorator. The HeroesComponent needs to bind to it.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;  //@Input() is the decorator.  hero property: Hero object.

  constructor() { }

  ngOnInit() {
  }


}
