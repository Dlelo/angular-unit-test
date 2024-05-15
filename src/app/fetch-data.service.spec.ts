import { FetchDataService } from './fetch-data.service';

describe('FetchDataService', () => {
  let service: FetchDataService;

  beforeEach(() => {
    service = new FetchDataService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get cars', () => {
    const expectedCars = 
    [ {make: 'Subaru', model: 'Outback', miles: 58232},
    {make: 'Honda', model: 'Accord', miles: 39393},
    {make: 'BMW', model: 'X3', miles: 4400}
  ]
    service.getCars();
    expect(service.cars).toEqual(expectedCars);
  });

  it('should add cars', () => {
    const addCar = {make: 'Toyota', model: 'Vitz', miles: 123}
    
    service.addCar(addCar);

    const expectedCars = 
    [ {make: 'Subaru', model: 'Outback', miles: 58232},
      {make: 'Honda', model: 'Accord', miles: 39393},
      {make: 'BMW', model: 'X3', miles: 4400},
      {make: 'Toyota', model: 'Vitz', miles: 123}
  ]

    expect(service.cars).toEqual(expectedCars);
  });

});
