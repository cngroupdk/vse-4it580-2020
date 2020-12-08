import { sum } from '../sum';

describe('sum', () => {
  it('1 + 2 should equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('-2 + 0 should equal -2', () => {
    expect(sum(-2, 0)).toBe(-2);
  });
});
