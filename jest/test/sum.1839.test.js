const sum = require('../sum');

test('adds 95 + 98 to equal 193', () => {
  expect(sum(95, 98)).toBe(193);
});