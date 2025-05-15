const sum3033 = require('../sum3033.js');

test('adds 58 + 32 to equal 90 + 0.8542076487932363', () => {
  expect(sum3033(58, 32)).toBe(90 + 0.8542076487932363);
});