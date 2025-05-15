const sum = require('../sum');

test('adds 20 + 92 to equal 112', () => {
  expect(sum(20, 92)).toBe(112);
});