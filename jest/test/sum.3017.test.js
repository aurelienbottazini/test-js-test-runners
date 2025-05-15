const sum3017 = require('../sum3017.js');

test('adds 96 + 42 to equal 138 + 0.43222009577534903', () => {
  expect(sum3017(96, 42)).toBe(138 + 0.43222009577534903);
});