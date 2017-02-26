import {Injectable} from '@angular/core';

@Injectable()
export class LargeService {
  run(): void {
    console.log('Large service...');
  }
}
