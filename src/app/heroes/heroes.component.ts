import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

//NOTE: when you type in your bash (CLI, command line interface in Angular):  ng generate component <name>   you get 4 files and an update. example:
// CREATE src/app/doggos/doggos.component.css (0 bytes)
// CREATE src/app/doggos/doggos.component.html (25 bytes)
// CREATE src/app/doggos/doggos.component.spec.ts (628 bytes)
// CREATE src/app/doggos/doggos.component.ts (269 bytes)
// UPDATE src/app/app.module.ts (478 bytes)

//app.module.ts is like a .json file in a way. declarations (dependencies in .json). If you delete your module you should also delete it in the module.ts

//for this one, I typed ng generate component <heroes>

//diff b.w components & modules: Components control views (html). They also communicate with other components and services to bring functionality to your app.

//Modules consist of one or more components... Modules allow you to manage your components to bring modularity (degree which components can be separated & combined) to your app.
//https://stackoverflow.com/questions/40073941/whats-the-difference-between-an-angular-component-and-module



@Component({
  selector: 'app-heroes', //component's css selector.
  templateUrl: './heroes.component.html', //location of the component's template file.
  styleUrls: ['./heroes.component.css'] //location of the component's private css styles.
})

export class HeroesComponent implements OnInit {

  heroes = HEROES; //'exposes these heroes for binding' updated nexts line.
  selectedHero: Hero;

  constructor() { }

  ngOnInit() { //lifecycle hook used for heavy init logic & fetching data. like React's componentDidMount.
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
