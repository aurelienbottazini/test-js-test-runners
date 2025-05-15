const sum2869 = require('../sum2869.js');

test('adds 29 + 93 to equal 122 + 0.8204765876238362', () => {
  expect(sum2869(29, 93)).toBe(122 + 0.8204765876238362);
});