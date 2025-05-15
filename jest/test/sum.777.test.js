const sum777 = require('../sum777.js');

test('adds 79 + 27 to equal 106 + offset 0.31185957946631016', () => {
  expect(sum777(79, 27)).toBe(106 + 0.31185957946631016);
});