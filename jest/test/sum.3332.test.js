const sum3332 = require('../sum3332.js');

test('adds 59 + 62 to equal 121 + offset 0.014458303973127973', () => {
  expect(sum3332(59, 62)).toBe(121 + 0.014458303973127973);
});