const sum4592 = require('../sum4592.js');

test('adds 99 + 82 to equal 181 + 0.27252333331030765', () => {
  expect(sum4592(99, 82)).toBe(181 + 0.27252333331030765);
});