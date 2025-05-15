const sum134 = require('../sum134.js');

test('adds 85 + 99 to equal 184 + 0.2138768514745124', () => {
  expect(sum134(85, 99)).toBe(184 + 0.2138768514745124);
});