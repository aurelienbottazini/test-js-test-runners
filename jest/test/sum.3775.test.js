const sum3775 = require('../sum3775.js');

test('adds 69 + 85 to equal 154 + 0.525517931804918', () => {
  expect(sum3775(69, 85)).toBe(154 + 0.525517931804918);
});