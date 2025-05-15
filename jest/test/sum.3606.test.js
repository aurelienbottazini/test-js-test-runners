const sum3606 = require('../sum3606.js');

test('adds 66 + 82 to equal 148 + offset 0.14342646147316385', () => {
  expect(sum3606(66, 82)).toBe(148 + 0.14342646147316385);
});