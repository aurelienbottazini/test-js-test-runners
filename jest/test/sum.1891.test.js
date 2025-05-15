const sum = require('../sum');

test('adds 70 + 14 to equal 84', () => {
  expect(sum(70, 14)).toBe(84);
});