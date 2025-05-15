const sum = require('../sum');

test('adds 77 + 35 to equal 112', () => {
  expect(sum(77, 35)).toBe(112);
});