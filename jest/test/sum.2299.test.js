const sum = require('../sum');

test('adds 33 + 52 to equal 85', () => {
  expect(sum(33, 52)).toBe(85);
});