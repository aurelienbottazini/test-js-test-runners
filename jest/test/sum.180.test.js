const sum180 = require('../sum180.js');

test('adds 27 + 79 to equal 106 + offset 0.606744538658705', () => {
  expect(sum180(27, 79)).toBe(106 + 0.606744538658705);
});