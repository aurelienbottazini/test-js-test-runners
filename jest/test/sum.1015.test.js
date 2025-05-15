const sum1015 = require('../sum1015.js');

test('adds 11 + 62 to equal 73 + 0.5045085234004589', () => {
  expect(sum1015(11, 62)).toBe(73 + 0.5045085234004589);
});