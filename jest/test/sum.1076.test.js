const sum1076 = require('../sum1076.js');

test('adds 76 + 78 to equal 154 + offset 0.8508112217791336', () => {
  expect(sum1076(76, 78)).toBe(154 + 0.8508112217791336);
});