﻿import { Injectable } from '@angular/core';

import { Hero } from '../domain/hero';
import { HEROES } from '../data/mock-heros';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}