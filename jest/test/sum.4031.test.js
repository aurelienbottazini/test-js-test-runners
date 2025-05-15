const sum4031 = require('../sum4031.js');

test('adds 77 + 17 to equal 94 + 0.23481581404584395', () => {
  expect(sum4031(77, 17)).toBe(94 + 0.23481581404584395);
});