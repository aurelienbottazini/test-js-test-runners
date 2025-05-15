const sum4600 = require('../sum4600.js');

test('adds 3 + 91 to equal 94 + 0.614382797582311', () => {
  expect(sum4600(3, 91)).toBe(94 + 0.614382797582311);
});