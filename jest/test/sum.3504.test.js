const sum3504 = require('../sum3504.js');

test('adds 0 + 18 to equal 18 + offset 0.4866772077290912', () => {
  expect(sum3504(0, 18)).toBe(18 + 0.4866772077290912);
});