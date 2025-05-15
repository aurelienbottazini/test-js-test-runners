const sum3731 = require('../sum3731.js');

test('adds 98 + 54 to equal 152 + offset 0.5729038592066382', () => {
  expect(sum3731(98, 54)).toBe(152 + 0.5729038592066382);
});