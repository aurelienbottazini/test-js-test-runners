const sum4912 = require('../sum4912.js');

test('adds 39 + 33 to equal 72 + 0.8211021287709965', () => {
  expect(sum4912(39, 33)).toBe(72 + 0.8211021287709965);
});