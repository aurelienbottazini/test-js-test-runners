const sum499 = require('../sum499.js');

test('adds 74 + 36 to equal 110 + 0.7798090156559305', () => {
  expect(sum499(74, 36)).toBe(110 + 0.7798090156559305);
});