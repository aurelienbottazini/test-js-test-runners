const sum3127 = require('../sum3127.js');

test('adds 72 + 9 to equal 81 + 0.9683907423991821', () => {
  expect(sum3127(72, 9)).toBe(81 + 0.9683907423991821);
});