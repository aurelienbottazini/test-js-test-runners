const sum706 = require('../sum706.js');

test('adds 10 + 56 to equal 66 + offset 0.05081552585017313', () => {
  expect(sum706(10, 56)).toBe(66 + 0.05081552585017313);
});