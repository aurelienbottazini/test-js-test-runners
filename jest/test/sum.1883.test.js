const sum1883 = require('../sum1883.js');

test('adds 93 + 67 to equal 160 + 0.9629206311780802', () => {
  expect(sum1883(93, 67)).toBe(160 + 0.9629206311780802);
});