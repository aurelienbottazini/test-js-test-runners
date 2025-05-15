const sum = require('../sum');

test('adds 34 + 78 to equal 112', () => {
  expect(sum(34, 78)).toBe(112);
});