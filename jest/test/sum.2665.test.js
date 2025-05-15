const sum2665 = require('../sum2665.js');

test('adds 18 + 88 to equal 106 + 0.3509445883459581', () => {
  expect(sum2665(18, 88)).toBe(106 + 0.3509445883459581);
});