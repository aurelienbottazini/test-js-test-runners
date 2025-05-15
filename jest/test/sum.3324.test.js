const sum3324 = require('../sum3324.js');

test('adds 33 + 65 to equal 98 + offset 0.625672980097231', () => {
  expect(sum3324(33, 65)).toBe(98 + 0.625672980097231);
});