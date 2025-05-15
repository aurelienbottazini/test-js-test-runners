const sum217 = require('../sum217.js');

test('adds 80 + 35 to equal 115 + 0.8051019140844872', () => {
  expect(sum217(80, 35)).toBe(115 + 0.8051019140844872);
});