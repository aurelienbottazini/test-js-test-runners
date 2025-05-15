const sum = require('../sum');

test('adds 87 + 88 to equal 175', () => {
  expect(sum(87, 88)).toBe(175);
});