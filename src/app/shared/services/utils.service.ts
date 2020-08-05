import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  range(start: number, end: number): number[] {
    // @ts-ignore
    return [...Array(end).keys()].map((el) => el + start);
  }
}
