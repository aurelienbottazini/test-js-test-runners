const sum = require('../sum');

test('adds 23 + 57 to equal 80', () => {
  expect(sum(23, 57)).toBe(80);
});