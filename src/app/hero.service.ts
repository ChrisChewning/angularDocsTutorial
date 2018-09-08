import { Injectable } from '@angular/core'; //Injectable symbol.
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; //of is a symbol here too.

//Observable is one of the key classes in the RxJS library. Angular's HttpClient methods return RxJS Observables.

//RxJS (Reactive Extensions Library for JS) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code





@Injectable({  //annotates the class w. the @Injectable decorator. unlike React you don't have to say Class. It just is. will be apart of the dependency injection system. Now the HeroService class (from hero.service.ts) will provide an injectable service and its own injected dependencies.
  providedIn: 'root'
  //this ^ registers the provider, which is needed to 'create or deliver a service.' This one instantiates the class to provide the service.
  //2. this is at the root level. there's now 'a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.'

})

export class HeroService {

  getHeroes(): Observable<Hero[]> { //emits a signle value. the array of mock heroes from mock-heroes.ts.
    return of(HEROES);
  }
}

  constructor() { }
}



//NOTE: The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.

//NOTE 2: The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
