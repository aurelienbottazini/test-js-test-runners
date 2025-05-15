const sum381 = require('../sum381.js');

test('adds 32 + 91 to equal 123 + offset 0.23082155122580572', () => {
  expect(sum381(32, 91)).toBe(123 + 0.23082155122580572);
});