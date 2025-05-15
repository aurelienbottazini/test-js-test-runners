const sum4025 = require('../sum4025.js');

test('adds 11 + 69 to equal 80 + offset 0.32461953077572436', () => {
  expect(sum4025(11, 69)).toBe(80 + 0.32461953077572436);
});