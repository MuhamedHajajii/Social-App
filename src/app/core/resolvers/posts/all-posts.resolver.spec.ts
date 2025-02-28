import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allPostsResolver } from './all-posts.resolver';

describe('allPostsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allPostsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
