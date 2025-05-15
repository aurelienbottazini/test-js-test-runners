const sum = require('../sum');

test('adds 96 + 4 to equal 100', () => {
  expect(sum(96, 4)).toBe(100);
});