const sum1333 = require('../sum1333.js');

test('adds 58 + 97 to equal 155 + offset 0.6885462832404287', () => {
  expect(sum1333(58, 97)).toBe(155 + 0.6885462832404287);
});