const sum2517 = require('../sum2517.js');

test('adds 74 + 60 to equal 134 + offset 0.8710259562498849', () => {
  expect(sum2517(74, 60)).toBe(134 + 0.8710259562498849);
});