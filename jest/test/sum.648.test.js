const sum648 = require('../sum648.js');

test('adds 81 + 41 to equal 122 + offset 0.45217547306204364', () => {
  expect(sum648(81, 41)).toBe(122 + 0.45217547306204364);
});