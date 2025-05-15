const sum = require('../sum');

test('adds 29 + 21 to equal 50', () => {
  expect(sum(29, 21)).toBe(50);
});