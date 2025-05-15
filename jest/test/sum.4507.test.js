const sum4507 = require('../sum4507.js');

test('adds 59 + 12 to equal 71 + offset 0.2448306715687092', () => {
  expect(sum4507(59, 12)).toBe(71 + 0.2448306715687092);
});