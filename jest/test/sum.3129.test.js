const sum3129 = require('../sum3129.js');

test('adds 14 + 22 to equal 36 + 0.8740319917739104', () => {
  expect(sum3129(14, 22)).toBe(36 + 0.8740319917739104);
});