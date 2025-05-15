const sum2567 = require('../sum2567.js');

test('adds 47 + 46 to equal 93 + 0.3494347742835108', () => {
  expect(sum2567(47, 46)).toBe(93 + 0.3494347742835108);
});