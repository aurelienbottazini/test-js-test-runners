const sum1265 = require('../sum1265.js');

test('adds 84 + 25 to equal 109 + 0.3716392253895753', () => {
  expect(sum1265(84, 25)).toBe(109 + 0.3716392253895753);
});