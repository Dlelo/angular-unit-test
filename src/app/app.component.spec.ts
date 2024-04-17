import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FetchDataService } from './fetch-data.service';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have the 'angular-testing' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angular-testing');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to angular testing');
//   });
// });
describe('AppComponent', () => {
  let component: AppComponent;
  let fetchDataService: jasmine.SpyObj<FetchDataService>;


  beforeEach(async () => {
    component = new AppComponent(fetchDataService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it(`should have the 'angular-testing' title`, () => {
    expect(component.title).toEqual('angular-testing');
  });

  
});
