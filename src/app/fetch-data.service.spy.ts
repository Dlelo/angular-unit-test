import { FetchDataService } from "./fetch-data.service";

export function fetchDataServiceSpy(): jasmine.SpyObj<FetchDataService> {
    return jasmine.createSpyObj('FetchDataService', [
      'getCars',
      'addCar',
    ]);
  }