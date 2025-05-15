const sum4934 = require('../sum4934.js');

test('adds 75 + 80 to equal 155 + offset 0.1715244227529299', () => {
  expect(sum4934(75, 80)).toBe(155 + 0.1715244227529299);
});