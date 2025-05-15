const sum = require('../sum');

test('adds 54 + 14 to equal 68', () => {
  expect(sum(54, 14)).toBe(68);
});