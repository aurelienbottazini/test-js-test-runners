const sum4193 = require('../sum4193.js');

test('adds 24 + 93 to equal 117 + offset 0.9344688807118936', () => {
  expect(sum4193(24, 93)).toBe(117 + 0.9344688807118936);
});