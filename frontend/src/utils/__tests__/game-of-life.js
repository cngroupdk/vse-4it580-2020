// 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// YES / NO ?

function shouldBeAlive(isAlive, neighbours) {
  if (!isAlive && neighbours === 2) return false;
  if (neighbours === 2 || neighbours === 3) {
    return true;
  }

  return false;
}

describe('shouldBeAlive', () => {
  describe('1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
    it('alive for 0 neneighbours should not be alive', () => {
      expect(shouldBeAlive(true, 0)).toBe(false);
    });
  });

  describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
    it('alive for 2 neneighbours should be alive', () => {
      expect(shouldBeAlive(true, 2)).toBe(true);
    });

    it('alive for 3 neneighbours should be alive', () => {
      expect(shouldBeAlive(true, 3)).toBe(true);
    });
  });

  describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    it('dead for 3 neighbours should be alive', () => {
      expect(shouldBeAlive(false, 3)).toBe(true);
    });
    it('dead for 2 neighbours should not be alive', () => {
      expect(shouldBeAlive(false, 2)).toBe(false);
    });
  });
});
