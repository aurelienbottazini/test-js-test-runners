const sum3576 = require('../sum3576.js');

test('adds 8 + 39 to equal 47 + 0.5120831666554372', () => {
  expect(sum3576(8, 39)).toBe(47 + 0.5120831666554372);
});