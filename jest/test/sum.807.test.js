const sum = require('../sum');

test('adds 35 + 21 to equal 56', () => {
  expect(sum(35, 21)).toBe(56);
});