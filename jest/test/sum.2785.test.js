const sum2785 = require('../sum2785.js');

test('adds 92 + 6 to equal 98 + 0.6787522215302444', () => {
  expect(sum2785(92, 6)).toBe(98 + 0.6787522215302444);
});