const sum = require('../sum');

test('adds 33 + 26 to equal 59', () => {
  expect(sum(33, 26)).toBe(59);
});