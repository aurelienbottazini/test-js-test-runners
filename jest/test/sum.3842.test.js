const sum = require('../sum');

test('adds 91 + 55 to equal 146', () => {
  expect(sum(91, 55)).toBe(146);
});