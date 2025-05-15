const sum3296 = require('../sum3296.js');

test('adds 32 + 67 to equal 99 + 0.7626073641736302', () => {
  expect(sum3296(32, 67)).toBe(99 + 0.7626073641736302);
});