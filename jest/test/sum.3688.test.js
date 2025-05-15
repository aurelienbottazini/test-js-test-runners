const sum = require('../sum');

test('adds 76 + 70 to equal 146', () => {
  expect(sum(76, 70)).toBe(146);
});