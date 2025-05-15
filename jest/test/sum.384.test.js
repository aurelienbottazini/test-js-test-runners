const sum = require('../sum');

test('adds 9 + 59 to equal 68', () => {
  expect(sum(9, 59)).toBe(68);
});