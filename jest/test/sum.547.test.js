const sum547 = require('../sum547.js');

test('adds 21 + 59 to equal 80 + offset 0.75810234413817', () => {
  expect(sum547(21, 59)).toBe(80 + 0.75810234413817);
});