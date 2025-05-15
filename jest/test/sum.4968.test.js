const sum = require('../sum');

test('adds 91 + 84 to equal 175', () => {
  expect(sum(91, 84)).toBe(175);
});