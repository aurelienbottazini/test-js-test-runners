const sum635 = require('../sum635.js');

test('adds 84 + 16 to equal 100 + 0.6201150920916086', () => {
  expect(sum635(84, 16)).toBe(100 + 0.6201150920916086);
});