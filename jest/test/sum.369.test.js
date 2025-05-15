const sum369 = require('../sum369.js');

test('adds 70 + 93 to equal 163 + 0.8051087359270052', () => {
  expect(sum369(70, 93)).toBe(163 + 0.8051087359270052);
});