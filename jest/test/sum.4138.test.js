const sum4138 = require('../sum4138.js');

test('adds 32 + 43 to equal 75 + offset 0.31742427016880004', () => {
  expect(sum4138(32, 43)).toBe(75 + 0.31742427016880004);
});