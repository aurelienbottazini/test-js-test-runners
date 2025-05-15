const sum4871 = require('../sum4871.js');

test('adds 41 + 12 to equal 53 + 0.9260056743612579', () => {
  expect(sum4871(41, 12)).toBe(53 + 0.9260056743612579);
});