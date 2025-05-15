const sum4773 = require('../sum4773.js');

test('adds 15 + 16 to equal 31 + offset 0.09188223851677735', () => {
  expect(sum4773(15, 16)).toBe(31 + 0.09188223851677735);
});