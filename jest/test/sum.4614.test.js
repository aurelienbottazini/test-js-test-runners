const sum = require('../sum');

test('adds 40 + 27 to equal 67', () => {
  expect(sum(40, 27)).toBe(67);
});