const sum2869 = require('../sum2869.js');

test('adds 44 + 83 to equal 127 + offset 0.8581662756592254', () => {
  expect(sum2869(44, 83)).toBe(127 + 0.8581662756592254);
});