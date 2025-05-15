const sum = require('../sum');

test('adds 31 + 46 to equal 77', () => {
  expect(sum(31, 46)).toBe(77);
});