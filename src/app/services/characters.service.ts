import { Injectable } from '@angular/core';
import { Character } from '../classes/character';
import { CHARACTERS } from '../classes/data-character';

@Injectable()
export class CharactersService {

  constructor() { }

  getCharacteres(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }
}
