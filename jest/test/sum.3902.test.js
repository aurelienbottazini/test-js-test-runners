const sum3902 = require('../sum3902.js');

test('adds 94 + 14 to equal 108 + offset 0.8264098188210814', () => {
  expect(sum3902(94, 14)).toBe(108 + 0.8264098188210814);
});