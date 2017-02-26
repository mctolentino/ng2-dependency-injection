import {Injectable} from '@angular/core';

@Injectable()
export class My2ndService {
  getValue(): string {
    return 'a second value';
  }
}
