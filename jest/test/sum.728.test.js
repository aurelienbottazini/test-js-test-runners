const sum728 = require('../sum728.js');

test('adds 50 + 3 to equal 53 + 0.6771235638736252', () => {
  expect(sum728(50, 3)).toBe(53 + 0.6771235638736252);
});