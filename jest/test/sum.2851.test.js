const sum2851 = require('../sum2851.js');

test('adds 57 + 36 to equal 93 + offset 0.7490567498296117', () => {
  expect(sum2851(57, 36)).toBe(93 + 0.7490567498296117);
});