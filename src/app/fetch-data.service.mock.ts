import { Car } from './car.interface';

export class FetchDataServiceMock {
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  cars: Car[] = [this.subaru, this.honda, this.bmw];

  getCars = jest.fn().mockReturnValue(this.cars);
  addCar = jest.fn().mockImplementation((car: Car) => this.cars.push(car));
  removeCar = jest.fn().mockImplementation(() => this.cars.pop());
}