const sum2528 = require('../sum2528.js');

test('adds 30 + 90 to equal 120 + offset 0.016223988978565806', () => {
  expect(sum2528(30, 90)).toBe(120 + 0.016223988978565806);
});