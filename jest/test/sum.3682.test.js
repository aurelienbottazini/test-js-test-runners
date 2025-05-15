const sum = require('../sum');

test('adds 70 + 43 to equal 113', () => {
  expect(sum(70, 43)).toBe(113);
});