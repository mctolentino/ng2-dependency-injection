import {Component, OnInit, ReflectiveInjector, Inject} from '@angular/core';
import {MyService} from "../services/my.service";
import {My2ndService} from "../services/my2nd.service";
import {ApiService} from "../services/api.service";
import {ViewportService} from "../services/viewport.service";

@Component({
  selector: 'app-di-sample-app',
  templateUrl: './di-sample-app.component.html',
  styleUrls: ['./di-sample-app.component.css']
})
export class DiSampleAppComponent implements OnInit {
  myService: MyService;

  constructor(private my2ndService: My2ndService,
              private apiService: ApiService,
              @Inject('ApiServiceAlias') private aliasService: ApiService,
              @Inject('SizeService') private sizeService: any) {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?', this.myService == injector.get(MyService));
  }

  invokeApi(): void {
    this.apiService.get();
    this.aliasService.get();
    this.sizeService.run();
  }

  useInjectors(): void {
    let injector: any = ReflectiveInjector.resolveAndCreate([
      ViewportService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => {
          return viewport.determineService();
        },
        deps: [ViewportService]
      }
    ]);
    let sizeService: any = injector.get('OtherSizeService');
    sizeService.run();
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
    console.log('My2ndService returned', this.my2ndService.getValue());
  }

  ngOnInit() {
  }

}
