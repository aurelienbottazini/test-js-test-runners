const sum = require('../sum');

test('adds 56 + 46 to equal 102', () => {
  expect(sum(56, 46)).toBe(102);
});