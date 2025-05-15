const sum1136 = require('../sum1136.js');

test('adds 17 + 96 to equal 113 + 0.5285801131293734', () => {
  expect(sum1136(17, 96)).toBe(113 + 0.5285801131293734);
});