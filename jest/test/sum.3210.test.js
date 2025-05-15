const sum = require('../sum');

test('adds 77 + 70 to equal 147', () => {
  expect(sum(77, 70)).toBe(147);
});