const sum = require('../sum');

test('adds 33 + 44 to equal 77', () => {
  expect(sum(33, 44)).toBe(77);
});