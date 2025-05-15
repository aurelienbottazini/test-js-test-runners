const sum = require('../sum');

test('adds 93 + 77 to equal 170', () => {
  expect(sum(93, 77)).toBe(170);
});