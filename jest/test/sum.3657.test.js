const sum3657 = require('../sum3657.js');

test('adds 66 + 15 to equal 81 + 0.10226316218692877', () => {
  expect(sum3657(66, 15)).toBe(81 + 0.10226316218692877);
});