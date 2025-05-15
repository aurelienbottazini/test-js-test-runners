const sum3430 = require('../sum3430.js');

test('adds 67 + 61 to equal 128 + 0.7627885267321832', () => {
  expect(sum3430(67, 61)).toBe(128 + 0.7627885267321832);
});