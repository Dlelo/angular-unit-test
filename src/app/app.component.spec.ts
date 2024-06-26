import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FetchDataService } from './fetch-data.service';
import { fetchDataServiceSpy } from './fetch-data.service.spy';
import { cold } from 'jasmine-marbles';

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
//     expect(compiled.querySelector('h1')?.textContent).toContain('Cars');
//   });
// });
describe('AppComponent', () => {
  let component: AppComponent;
  let fetchDataService: jasmine.SpyObj<FetchDataService>;
  const expectedCars = 
    [ {make: 'Subaru', model: 'Outback', miles: 58232},
    {make: 'Honda', model: 'Accord', miles: 39393},
    {make: 'BMW', model: 'X3', miles: 4400}
    ]


  beforeEach(async () => {
    fetchDataService = fetchDataServiceSpy();
    fetchDataService.getCars.and.returnValue(expectedCars);
    component = new AppComponent(fetchDataService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it(`should fetch cars `, () => {
    component.ngOnInit();
    expect(component.cars).toEqual(expectedCars);
  });

   it('should return isCarsAvailableSubject$ true on component init using fake async', fakeAsync(() => {
    component.isCarsAvailableSubject$.subscribe((isCar: boolean) => {
      expect(isCar).toEqual(true);
    });
    tick();
  }));

    it(`should return isCarsAvailableSubject$ true on init using marble testing `, () => {
    component.ngOnInit();
    expect(component.isCarsAvailableSubject$).toBeObservable(
      cold('(a)', {
        a: true
      }),
    );
  });
 

  describe('test if no cars', () => {
 
    it('should return isCarsAvailableSubject$ false using fake async', fakeAsync(() => {
      fetchDataService.getCars.and.returnValue([]);
      component.ngOnInit();
      console.log(component.cars);
      component.isCarsAvailableSubject$.subscribe((isCar: boolean) => {
        expect(isCar).toEqual(false);
      });
      tick();
    }));
    

     it(`should return isCarsAvailableSubject$ false using marble testing `, () => { 
      fetchDataService.getCars.and.returnValue([]);
      component.ngOnInit();
      expect(component.isCarsAvailableSubject$).toBeObservable(
      cold('(a)', {
        a: false
      }),
    );
  });

  });

});


