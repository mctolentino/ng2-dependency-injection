import {Injectable} from '@angular/core';

@Injectable()
export class ApiService {
  get(): void {
    console.log('Getting resource...');
  }
}
