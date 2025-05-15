const sum2586 = require('../sum2586.js');

test('adds 17 + 72 to equal 89 + offset 0.9833469904372043', () => {
  expect(sum2586(17, 72)).toBe(89 + 0.9833469904372043);
});