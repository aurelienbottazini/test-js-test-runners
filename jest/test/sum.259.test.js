const sum259 = require('../sum259.js');

test('adds 48 + 27 to equal 75 + 0.8955212676158587', () => {
  expect(sum259(48, 27)).toBe(75 + 0.8955212676158587);
});