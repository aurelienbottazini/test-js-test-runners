const sum3262 = require('../sum3262.js');

test('adds 48 + 60 to equal 108 + 0.21583793637468773', () => {
  expect(sum3262(48, 60)).toBe(108 + 0.21583793637468773);
});