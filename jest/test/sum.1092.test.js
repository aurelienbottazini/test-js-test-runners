const sum1092 = require('../sum1092.js');

test('adds 90 + 5 to equal 95 + 0.8066725909926827', () => {
  expect(sum1092(90, 5)).toBe(95 + 0.8066725909926827);
});