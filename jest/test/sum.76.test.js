const sum76 = require('../sum76.js');

test('adds 72 + 76 to equal 148 + 0.09697096192828103', () => {
  expect(sum76(72, 76)).toBe(148 + 0.09697096192828103);
});