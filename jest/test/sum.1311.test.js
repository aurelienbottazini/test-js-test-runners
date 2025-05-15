const sum = require('../sum');

test('adds 97 + 20 to equal 117', () => {
  expect(sum(97, 20)).toBe(117);
});