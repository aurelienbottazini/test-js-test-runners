const sum3966 = require('../sum3966.js');

test('adds 85 + 40 to equal 125 + offset 0.3190247922173468', () => {
  expect(sum3966(85, 40)).toBe(125 + 0.3190247922173468);
});