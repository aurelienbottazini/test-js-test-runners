const sum2470 = require('../sum2470.js');

test('adds 20 + 66 to equal 86 + offset 0.8488128505057605', () => {
  expect(sum2470(20, 66)).toBe(86 + 0.8488128505057605);
});