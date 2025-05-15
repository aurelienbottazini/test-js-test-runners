const sum4968 = require('../sum4968.js');

test('adds 0 + 92 to equal 92 + offset 0.7634289451928843', () => {
  expect(sum4968(0, 92)).toBe(92 + 0.7634289451928843);
});