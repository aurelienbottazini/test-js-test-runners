const sum4643 = require('../sum4643.js');

test('adds 82 + 42 to equal 124 + offset 0.9285327575352015', () => {
  expect(sum4643(82, 42)).toBe(124 + 0.9285327575352015);
});