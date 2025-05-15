const sum = require('../sum');

test('adds 52 + 33 to equal 85', () => {
  expect(sum(52, 33)).toBe(85);
});