const sum61 = require('../sum61.js');

test('adds 7 + 57 to equal 64 + offset 0.7714385110699555', () => {
  expect(sum61(7, 57)).toBe(64 + 0.7714385110699555);
});