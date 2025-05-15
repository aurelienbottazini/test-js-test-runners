const sum = require('../sum');

test('adds 43 + 7 to equal 50', () => {
  expect(sum(43, 7)).toBe(50);
});