import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";
import { getInjectorIndex } from "@angular/core/src/render3/di";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Mr. Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "Rubber Man" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" },
      { id: 21, name: "Dr Roer" }
    ];
    return { heroes };
  }
  getInjectorIndex(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
