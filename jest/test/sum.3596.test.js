const sum = require('../sum');

test('adds 98 + 14 to equal 112', () => {
  expect(sum(98, 14)).toBe(112);
});