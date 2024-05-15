import { AppComponent } from './app.component';
import { FetchDataService } from './fetch-data.service';
import { of } from 'rxjs';
// import { fetchDataServiceSpy } from './fetch-data.service.spy';
// import {cold } from 'jest-marbles';


describe('AppComponent', () => {
  let component: AppComponent;
  let fetchDataService: jasmine.SpyObj<FetchDataService>;
  const expectedCars = 
    [ {make: 'Subaru', model: 'Outback', miles: 58232},
    {make: 'Honda', model: 'Accord', miles: 39393},
    {make: 'BMW', model: 'X3', miles: 4400}
    ]


  beforeEach(async () => {
    fetchDataService = jasmine.createSpyObj('FetchDataService', ['getCars']);
    // fetchDataService = fetchDataServiceSpy();
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

   it('should return isCarsAvailableSubject$ true on component init using fake async', () => {
    component.isCarsAvailableSubject$.subscribe((isCar: boolean) => {
      expect(isCar).toEqual(true);
    });
   
  });

  //   it(`should return isCarsAvailableSubject$ true on init using marble testing `, () => {
  //   component.ngOnInit();
  //   expect(component.isCarsAvailableSubject$).toBeObservable(
  //     cold('(a)', {
  //       a: true
  //     }),
  //   );
  // });
 

  describe('test if no cars', () => {
 
    it('should return isCarsAvailableSubject$ false using fake async', () => {
      fetchDataService.getCars.and.returnValue([]);
      component.ngOnInit();
      console.log(component.cars);
      component.isCarsAvailableSubject$.subscribe((isCar: boolean) => {
        expect(isCar).toEqual(false);
      });
    
    });
    

  //    it(`should return isCarsAvailableSubject$ false using marble testing `, () => { 
  //     fetchDataService.getCars.and.returnValue([]);
  //     component.ngOnInit();
  //     expect(component.isCarsAvailableSubject$).toBeObservable(
  //     cold('(a)', {
  //       a: false
  //     }),
  //   );
  // });

  });

});


