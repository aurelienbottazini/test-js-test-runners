const sum926 = require('../sum926.js');

test('adds 87 + 20 to equal 107 + 0.9463219794805463', () => {
  expect(sum926(87, 20)).toBe(107 + 0.9463219794805463);
});