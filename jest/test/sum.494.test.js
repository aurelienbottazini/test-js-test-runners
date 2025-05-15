const sum = require('../sum');

test('adds 78 + 69 to equal 147', () => {
  expect(sum(78, 69)).toBe(147);
});