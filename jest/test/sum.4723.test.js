const sum4723 = require('../sum4723.js');

test('adds 6 + 58 to equal 64 + offset 0.24700280740645209', () => {
  expect(sum4723(6, 58)).toBe(64 + 0.24700280740645209);
});