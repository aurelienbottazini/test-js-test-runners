const sum = require('../sum');

test('adds 39 + 60 to equal 99', () => {
  expect(sum(39, 60)).toBe(99);
});