const sum = require('../sum');

test('adds 24 + 87 to equal 111', () => {
  expect(sum(24, 87)).toBe(111);
});