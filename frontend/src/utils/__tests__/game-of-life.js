// 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// 2. Any live cell with two or three live neighbours lives on to the next generation.
// 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function shouldBeAlive(isAlive, neighbours) {
  if (neighbours === 2) {
    return isAlive;
  }

  if (neighbours === 3) {
    return true;
  }

  return false;
}

describe('1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
  it('live cell with 0 neighbours should be dead', () => {
    expect(shouldBeAlive(true, 0)).toBe(false);
  });
});

describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
  it('live cell with 2 neighbours should be live', () => {
    expect(shouldBeAlive(true, 2)).toBe(true);
  });

  it('live cell with 3 neighbours should be live', () => {
    expect(shouldBeAlive(true, 3)).toBe(true);
  });
});

describe('3. Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
  it('live cell with 4 neighbours should be dead', () => {
    expect(shouldBeAlive(true, 4)).toBe(false);
  });
});

describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
  it('dead cell with 3 neighbours should alive', () => {
    expect(shouldBeAlive(false, 3)).toBe(true);
  });

  it('dead cell with 2 neighbours should alive', () => {
    expect(shouldBeAlive(false, 2)).toBe(false);
  });
});
