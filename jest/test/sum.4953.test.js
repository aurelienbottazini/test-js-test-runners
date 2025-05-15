const sum4953 = require('../sum4953.js');

test('adds 64 + 67 to equal 131 + 0.1357368430843474', () => {
  expect(sum4953(64, 67)).toBe(131 + 0.1357368430843474);
});