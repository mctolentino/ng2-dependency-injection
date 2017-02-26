import {Injectable} from '@angular/core';

@Injectable()
export class MyService {
  getValue(): string {
    return 'a value';
  }
}
