const sum = require('../sum');

test('adds 88 + 27 to equal 115', () => {
  expect(sum(88, 27)).toBe(115);
});