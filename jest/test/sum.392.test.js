const sum = require('../sum');

test('adds 39 + 74 to equal 113', () => {
  expect(sum(39, 74)).toBe(113);
});