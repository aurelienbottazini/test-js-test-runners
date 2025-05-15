const sum4809 = require('../sum4809.js');

test('adds 0 + 48 to equal 48 + offset 0.9908635054142801', () => {
  expect(sum4809(0, 48)).toBe(48 + 0.9908635054142801);
});