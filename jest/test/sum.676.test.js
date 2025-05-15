const sum = require('../sum');

test('adds 79 + 91 to equal 170', () => {
  expect(sum(79, 91)).toBe(170);
});