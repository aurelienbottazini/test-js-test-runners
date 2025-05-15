const sum4602 = require('../sum4602.js');

test('adds 60 + 41 to equal 101 + offset 0.14330707112660546', () => {
  expect(sum4602(60, 41)).toBe(101 + 0.14330707112660546);
});