const sum3673 = require('../sum3673.js');

test('adds 57 + 68 to equal 125 + offset 0.8266186672795056', () => {
  expect(sum3673(57, 68)).toBe(125 + 0.8266186672795056);
});