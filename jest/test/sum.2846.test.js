const sum = require('../sum');

test('adds 60 + 27 to equal 87', () => {
  expect(sum(60, 27)).toBe(87);
});