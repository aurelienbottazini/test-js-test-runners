const sum134 = require('../sum134.js');

test('adds 2 + 32 to equal 34 + offset 0.7105762821852645', () => {
  expect(sum134(2, 32)).toBe(34 + 0.7105762821852645);
});