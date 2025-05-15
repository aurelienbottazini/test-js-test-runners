const sum4187 = require('../sum4187.js');

test('adds 95 + 35 to equal 130 + 0.44850192811829714', () => {
  expect(sum4187(95, 35)).toBe(130 + 0.44850192811829714);
});