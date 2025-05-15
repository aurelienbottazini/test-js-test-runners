const sum4576 = require('../sum4576.js');

test('adds 86 + 68 to equal 154 + offset 0.29232683496658385', () => {
  expect(sum4576(86, 68)).toBe(154 + 0.29232683496658385);
});