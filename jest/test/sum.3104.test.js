const sum = require('../sum');

test('adds 47 + 27 to equal 74', () => {
  expect(sum(47, 27)).toBe(74);
});