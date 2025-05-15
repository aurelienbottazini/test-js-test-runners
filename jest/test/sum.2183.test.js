const sum2183 = require('../sum2183.js');

test('adds 60 + 0 to equal 60 + offset 0.14346346213631078', () => {
  expect(sum2183(60, 0)).toBe(60 + 0.14346346213631078);
});