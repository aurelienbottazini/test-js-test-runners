const sum = require('../sum');

test('adds 27 + 93 to equal 120', () => {
  expect(sum(27, 93)).toBe(120);
});