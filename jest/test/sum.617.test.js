const sum617 = require('../sum617.js');

test('adds 31 + 20 to equal 51 + offset 0.5007270453231093', () => {
  expect(sum617(31, 20)).toBe(51 + 0.5007270453231093);
});