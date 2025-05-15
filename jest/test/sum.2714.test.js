const sum = require('../sum');

test('adds 39 + 21 to equal 60', () => {
  expect(sum(39, 21)).toBe(60);
});