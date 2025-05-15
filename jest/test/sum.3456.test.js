const sum = require('../sum');

test('adds 98 + 46 to equal 144', () => {
  expect(sum(98, 46)).toBe(144);
});