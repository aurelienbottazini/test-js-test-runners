const sum3550 = require('../sum3550.js');

test('adds 49 + 57 to equal 106 + offset 0.5794828499343737', () => {
  expect(sum3550(49, 57)).toBe(106 + 0.5794828499343737);
});