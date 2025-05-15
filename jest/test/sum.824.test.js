const sum824 = require('../sum824.js');

test('adds 78 + 87 to equal 165 + offset 0.2260886651245373', () => {
  expect(sum824(78, 87)).toBe(165 + 0.2260886651245373);
});