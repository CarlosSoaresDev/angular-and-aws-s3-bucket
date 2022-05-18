import { TestBed } from '@angular/core/testing';

import { BucketS3Service } from './bucket-s3.service';

describe('BucketS3Service', () => {
  let service: BucketS3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketS3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
