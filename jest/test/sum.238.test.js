const sum238 = require('../sum238.js');

test('adds 98 + 23 to equal 121 + 0.7772610215632461', () => {
  expect(sum238(98, 23)).toBe(121 + 0.7772610215632461);
});