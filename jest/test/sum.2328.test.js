const sum = require('../sum');

test('adds 96 + 74 to equal 170', () => {
  expect(sum(96, 74)).toBe(170);
});