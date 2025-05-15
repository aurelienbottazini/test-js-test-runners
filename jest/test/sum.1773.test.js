const sum = require('../sum');

test('adds 73 + 22 to equal 95', () => {
  expect(sum(73, 22)).toBe(95);
});