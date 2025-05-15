const sum2312 = require('../sum2312.js');

test('adds 18 + 35 to equal 53 + offset 0.06699781311315811', () => {
  expect(sum2312(18, 35)).toBe(53 + 0.06699781311315811);
});