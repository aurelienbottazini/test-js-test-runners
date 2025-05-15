const sum3680 = require('../sum3680.js');

test('adds 63 + 46 to equal 109 + 0.38656147787674533', () => {
  expect(sum3680(63, 46)).toBe(109 + 0.38656147787674533);
});