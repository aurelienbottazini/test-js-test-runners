const sum = require('../sum');

test('adds 77 + 27 to equal 104', () => {
  expect(sum(77, 27)).toBe(104);
});