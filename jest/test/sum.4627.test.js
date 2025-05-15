const sum4627 = require('../sum4627.js');

test('adds 70 + 22 to equal 92 + offset 0.016200490108698284', () => {
  expect(sum4627(70, 22)).toBe(92 + 0.016200490108698284);
});