const sum = require('../sum');

test('adds 18 + 88 to equal 106', () => {
  expect(sum(18, 88)).toBe(106);
});