const sum145 = require('../sum145.js');

test('adds 1 + 60 to equal 61 + 0.38183772481991085', () => {
  expect(sum145(1, 60)).toBe(61 + 0.38183772481991085);
});