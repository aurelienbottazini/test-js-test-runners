const sum4553 = require('../sum4553.js');

test('adds 44 + 94 to equal 138 + offset 0.22350534495849872', () => {
  expect(sum4553(44, 94)).toBe(138 + 0.22350534495849872);
});