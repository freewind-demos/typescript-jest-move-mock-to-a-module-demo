import asMock from "./asMock";
import hello from "./hello";
import decorate from './decorate';

// If this is importing is not load first, the test may fail
import './mockDecorate';

describe('hello2', () => {
  const mockDecorate = asMock(decorate);

  beforeEach(() => mockDecorate.mockClear());

  it('tests', () => {
    mockDecorate.mockImplementation((s) => `[${s}]`)
    expect(hello('aaa')).toEqual('Hello, [aaa]!')
  })

})
