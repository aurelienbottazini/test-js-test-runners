const sum = require('../sum');

test('adds 50 + 27 to equal 77', () => {
  expect(sum(50, 27)).toBe(77);
});