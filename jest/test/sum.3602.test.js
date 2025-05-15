const sum3602 = require('../sum3602.js');

test('adds 16 + 98 to equal 114 + 0.1466206240092146', () => {
  expect(sum3602(16, 98)).toBe(114 + 0.1466206240092146);
});