const sum = require('../sum');

test('adds 45 + 46 to equal 91', () => {
  expect(sum(45, 46)).toBe(91);
});