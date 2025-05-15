const sum2614 = require('../sum2614.js');

test('adds 66 + 49 to equal 115 + offset 0.943918006832761', () => {
  expect(sum2614(66, 49)).toBe(115 + 0.943918006832761);
});