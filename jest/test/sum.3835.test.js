const sum3835 = require('../sum3835.js');

test('adds 22 + 86 to equal 108 + 0.5371758260439936', () => {
  expect(sum3835(22, 86)).toBe(108 + 0.5371758260439936);
});