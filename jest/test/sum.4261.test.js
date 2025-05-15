const sum4261 = require('../sum4261.js');

test('adds 94 + 31 to equal 125 + offset 0.17510766665316757', () => {
  expect(sum4261(94, 31)).toBe(125 + 0.17510766665316757);
});