const sum1131 = require('../sum1131.js');

test('adds 70 + 9 to equal 79 + 0.8408842624205324', () => {
  expect(sum1131(70, 9)).toBe(79 + 0.8408842624205324);
});