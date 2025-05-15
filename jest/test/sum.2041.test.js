const sum = require('../sum');

test('adds 53 + 94 to equal 147', () => {
  expect(sum(53, 94)).toBe(147);
});