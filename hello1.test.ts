// We have to put this before all others to make sure 'jest.mock' is called first manually
// this is not a good solution
import './mockDecorate';

import asMock from "./asMock";
import hello from "./hello";
import decorate from './decorate';

describe('hello1', () => {
  const mockDecorate = asMock(decorate);

  beforeEach(() => mockDecorate.mockClear());

  it('tests', () => {
    mockDecorate.mockImplementation((s) => `[${s}]`)
    expect(hello('aaa')).toEqual('Hello, [aaa]!')
  })

})
