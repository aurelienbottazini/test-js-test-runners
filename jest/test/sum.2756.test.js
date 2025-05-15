const sum2756 = require('../sum2756.js');

test('adds 0 + 7 to equal 7 + offset 0.34358838443654605', () => {
  expect(sum2756(0, 7)).toBe(7 + 0.34358838443654605);
});