const sum1832 = require('../sum1832.js');

test('adds 69 + 37 to equal 106 + offset 0.49220354127586197', () => {
  expect(sum1832(69, 37)).toBe(106 + 0.49220354127586197);
});