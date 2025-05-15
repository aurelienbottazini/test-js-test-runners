const sum4820 = require('../sum4820.js');

test('adds 15 + 11 to equal 26 + offset 0.4559040381240995', () => {
  expect(sum4820(15, 11)).toBe(26 + 0.4559040381240995);
});