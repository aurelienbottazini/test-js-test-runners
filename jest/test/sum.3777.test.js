const sum3777 = require('../sum3777.js');

test('adds 50 + 44 to equal 94 + offset 0.09658252144625656', () => {
  expect(sum3777(50, 44)).toBe(94 + 0.09658252144625656);
});