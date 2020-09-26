import asMock from "./asMock";
import decorate from './decorate';
import hello from "./hello";

// Wrong: jest.mock('./decorate', () => { default: jest.fn() })
// Correct: jest.mock('./decorate', () => jest.fn())
jest.mock('./decorate');

describe('mock test', () => {
  const mockDecorate = asMock(decorate);

  beforeEach(() => mockDecorate.mockClear());

  it('test1', () => {
    mockDecorate.mockImplementation((s) => `[${s}]`)
    expect(hello('aaa')).toEqual('Hello, [aaa]!')
    expect(mockDecorate).toHaveBeenCalledWith('aaa')
  })

  it('test2', () => {
    mockDecorate.mockImplementation((s) => `<${s}>`)
    expect(hello('bbb')).toEqual('Hello, <bbb>!')
    expect(mockDecorate).toHaveBeenCalledWith('bbb')
  })

})
