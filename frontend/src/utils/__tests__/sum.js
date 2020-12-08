import { sum } from '../sum';

describe('sum', () => {
  it('1 + 2 to qual 3', () => {
    expect(sum(1, 2)).toBe(3); // ===
  });

  it('-2 + 0 to eual -2', () => {
    expect(sum(-2, 0)).toEqual(-2); // ==
  });
});
