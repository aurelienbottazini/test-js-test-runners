const sum = require('../sum');

test('adds 91 + 27 to equal 118', () => {
  expect(sum(91, 27)).toBe(118);
});