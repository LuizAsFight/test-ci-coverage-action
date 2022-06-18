import { sum } from "./App";

describe('Test', () => {
  it('pass', () => {
    expect(true);

    expect(sum(1,2)).toEqual(3);
  })
})
