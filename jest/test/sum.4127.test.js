const sum = require('../sum');

test('adds 62 + 14 to equal 76', () => {
  expect(sum(62, 14)).toBe(76);
});