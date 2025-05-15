const sum3907 = require('../sum3907.js');

test('adds 75 + 69 to equal 144 + 0.032013353537832856', () => {
  expect(sum3907(75, 69)).toBe(144 + 0.032013353537832856);
});