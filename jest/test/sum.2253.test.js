const sum = require('../sum');

test('adds 50 + 10 to equal 60', () => {
  expect(sum(50, 10)).toBe(60);
});