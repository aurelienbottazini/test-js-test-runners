const sum4736 = require('../sum4736.js');

test('adds 64 + 68 to equal 132 + offset 0.38652508497223526', () => {
  expect(sum4736(64, 68)).toBe(132 + 0.38652508497223526);
});