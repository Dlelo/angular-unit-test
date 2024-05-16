
  export function fetchDataServiceSpy() {
    return {
      getCars: jest.fn(),
      addCar: jest.fn(),
      removeCar: jest.fn(),
    };
  }