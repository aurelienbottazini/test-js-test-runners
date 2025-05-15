const sum3786 = require('../sum3786.js');

test('adds 69 + 67 to equal 136 + offset 0.6477161315496194', () => {
  expect(sum3786(69, 67)).toBe(136 + 0.6477161315496194);
});