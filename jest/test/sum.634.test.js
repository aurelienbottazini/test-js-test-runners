const sum634 = require('../sum634.js');

test('adds 15 + 64 to equal 79 + offset 0.3286089702702807', () => {
  expect(sum634(15, 64)).toBe(79 + 0.3286089702702807);
});