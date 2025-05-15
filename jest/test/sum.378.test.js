const sum = require('../sum');

test('adds 85 + 21 to equal 106', () => {
  expect(sum(85, 21)).toBe(106);
});