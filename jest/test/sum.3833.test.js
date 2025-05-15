const sum = require('../sum');

test('adds 77 + 93 to equal 170', () => {
  expect(sum(77, 93)).toBe(170);
});