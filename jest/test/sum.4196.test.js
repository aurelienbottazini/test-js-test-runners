const sum4196 = require('../sum4196.js');

test('adds 70 + 4 to equal 74 + 0.019281593614061343', () => {
  expect(sum4196(70, 4)).toBe(74 + 0.019281593614061343);
});