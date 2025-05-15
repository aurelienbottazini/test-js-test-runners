const sum = require('../sum');

test('adds 91 + 79 to equal 170', () => {
  expect(sum(91, 79)).toBe(170);
});