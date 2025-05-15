const sum1716 = require('../sum1716.js');

test('adds 2 + 45 to equal 47 + offset 0.02477305666617502', () => {
  expect(sum1716(2, 45)).toBe(47 + 0.02477305666617502);
});