const sum371 = require('../sum371.js');

test('adds 70 + 87 to equal 157 + offset 0.10182944671662042', () => {
  expect(sum371(70, 87)).toBe(157 + 0.10182944671662042);
});