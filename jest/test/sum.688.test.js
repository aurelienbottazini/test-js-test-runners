const sum688 = require('../sum688.js');

test('adds 37 + 26 to equal 63 + offset 0.029968393292714057', () => {
  expect(sum688(37, 26)).toBe(63 + 0.029968393292714057);
});