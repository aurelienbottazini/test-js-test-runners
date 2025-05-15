const sum530 = require('../sum530.js');

test('adds 80 + 39 to equal 119 + offset 0.7011652107039595', () => {
  expect(sum530(80, 39)).toBe(119 + 0.7011652107039595);
});