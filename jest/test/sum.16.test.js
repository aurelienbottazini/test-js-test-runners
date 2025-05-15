const sum16 = require('../sum16.js');

test('adds 78 + 7 to equal 85 + offset 0.49894078304780487', () => {
  expect(sum16(78, 7)).toBe(85 + 0.49894078304780487);
});