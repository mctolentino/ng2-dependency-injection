import {Injectable} from '@angular/core';

@Injectable()
export class SmallService {
  run(): void {
    console.log('Small service...');
  }
}
