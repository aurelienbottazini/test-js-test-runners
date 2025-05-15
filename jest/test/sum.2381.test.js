const sum = require('../sum');

test('adds 70 + 93 to equal 163', () => {
  expect(sum(70, 93)).toBe(163);
});