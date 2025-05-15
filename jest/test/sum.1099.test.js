const sum = require('../sum');

test('adds 37 + 46 to equal 83', () => {
  expect(sum(37, 46)).toBe(83);
});