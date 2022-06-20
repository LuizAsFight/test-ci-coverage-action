import { sum } from "./App";

describe('Test', () => {
  it('pass', () => {
    expect(sum(1,2)).toEqual(32);
  })
})