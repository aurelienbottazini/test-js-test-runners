const sum1060 = require('../sum1060.js');

test('adds 89 + 49 to equal 138 + 0.4572888532313707', () => {
  expect(sum1060(89, 49)).toBe(138 + 0.4572888532313707);
});