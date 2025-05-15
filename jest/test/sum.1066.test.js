const sum1066 = require('../sum1066.js');

test('adds 85 + 99 to equal 184 + 0.8397476866878901', () => {
  expect(sum1066(85, 99)).toBe(184 + 0.8397476866878901);
});