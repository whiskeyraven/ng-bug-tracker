import { TestBed } from '@angular/core/testing';

import { BugsService } from './bugs.service';
import { HttpClientModule } from '@angular/common/http';

describe('BugsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: BugsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [BugsService]
    });
    service = TestBed.get(BugsService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
});

  it('should be created', () => {
    const service: BugsService = TestBed.get(BugsService);
    expect(service).toBeTruthy();
  });
});
