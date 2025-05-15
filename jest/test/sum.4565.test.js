const sum4565 = require('../sum4565.js');

test('adds 23 + 50 to equal 73 + offset 0.7943286704690878', () => {
  expect(sum4565(23, 50)).toBe(73 + 0.7943286704690878);
});