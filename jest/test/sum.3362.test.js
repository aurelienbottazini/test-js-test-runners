const sum = require('../sum');

test('adds 58 + 46 to equal 104', () => {
  expect(sum(58, 46)).toBe(104);
});