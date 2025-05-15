const sum4265 = require('../sum4265.js');

test('adds 72 + 62 to equal 134 + offset 0.4819335175070958', () => {
  expect(sum4265(72, 62)).toBe(134 + 0.4819335175070958);
});