const sum1490 = require('../sum1490.js');

test('adds 41 + 90 to equal 131 + offset 0.4230905627959194', () => {
  expect(sum1490(41, 90)).toBe(131 + 0.4230905627959194);
});