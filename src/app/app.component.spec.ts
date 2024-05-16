import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { FetchDataServiceMock } from './fetch-data.service.mock';
import { Car } from './car.interface';

jest.mock('./app.component.html', () => '');
jest.mock('./app.component.scss', () => '');

describe('AppComponent without TestBed', () => {
  let component: AppComponent;
  let fetchDataService: FetchDataServiceMock;

  beforeEach(() => {
    fetchDataService = new FetchDataServiceMock();
    component = new AppComponent(fetchDataService as any);
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cars and check car length on init', () => {
    component.ngOnInit();

    expect(component.cars).toEqual(fetchDataService.cars);
    expect(component.isCarsAvailableSubject$.getValue()).toBe(true);
  });

  it('should update isCarsAvailableSubject$ when no cars are available', () => {
    fetchDataService.getCars = jest.fn().mockReturnValue([]);
    component.ngOnInit();

    expect(component.cars).toEqual([]);
    expect(component.isCarsAvailableSubject$.getValue()).toBe(false);
  });

  it('should call removeCar and update isCarsAvailableSubject$', () => {
    component.ngOnInit();
    component.removeCar();

    expect(fetchDataService.removeCar).toHaveBeenCalled();
    expect(component.cars.length).toBe(2); // One car removed
    expect(component.isCarsAvailableSubject$.getValue()).toBe(true);
  });

  it('should update isCarsAvailableSubject$ to false when all cars are removed', () => {
    component.ngOnInit();
    component.removeCar();
    component.removeCar();
    component.removeCar();

    expect(fetchDataService.removeCar).toHaveBeenCalledTimes(3);
    expect(component.cars.length).toBe(0); // All cars removed
    expect(component.isCarsAvailableSubject$.getValue()).toBe(false);
  });
});