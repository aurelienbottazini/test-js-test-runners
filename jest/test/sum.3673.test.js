const sum = require('../sum');

test('adds 95 + 95 to equal 190', () => {
  expect(sum(95, 95)).toBe(190);
});