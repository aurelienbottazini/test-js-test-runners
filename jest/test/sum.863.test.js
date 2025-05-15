const sum = require('../sum');

test('adds 30 + 46 to equal 76', () => {
  expect(sum(30, 46)).toBe(76);
});