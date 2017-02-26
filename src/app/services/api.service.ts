import {Injectable, Inject} from '@angular/core';

export const API_URL: string = 'API_URL';

@Injectable()
export class ApiService {
  constructor(@Inject(API_URL) private API_URL: string) {
  }

  get(): void {
    console.log('Getting resource...', this.API_URL);
  }
}
