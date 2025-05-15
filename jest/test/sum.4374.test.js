const sum4374 = require('../sum4374.js');

test('adds 67 + 76 to equal 143 + offset 0.818931907376826', () => {
  expect(sum4374(67, 76)).toBe(143 + 0.818931907376826);
});