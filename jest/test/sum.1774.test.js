const sum = require('../sum');

test('adds 7 + 93 to equal 100', () => {
  expect(sum(7, 93)).toBe(100);
});