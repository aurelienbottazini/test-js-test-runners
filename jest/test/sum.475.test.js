const sum = require('../sum');

test('adds 40 + 36 to equal 76', () => {
  expect(sum(40, 36)).toBe(76);
});