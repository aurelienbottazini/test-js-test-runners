const sum4225 = require('../sum4225.js');

test('adds 32 + 86 to equal 118 + offset 0.6516635609612237', () => {
  expect(sum4225(32, 86)).toBe(118 + 0.6516635609612237);
});