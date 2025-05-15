const sum4788 = require('../sum4788.js');

test('adds 20 + 80 to equal 100 + 0.5095488398304501', () => {
  expect(sum4788(20, 80)).toBe(100 + 0.5095488398304501);
});