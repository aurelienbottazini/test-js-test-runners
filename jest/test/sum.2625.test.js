const sum2625 = require('../sum2625.js');

test('adds 12 + 1 to equal 13 + offset 0.44662408921483765', () => {
  expect(sum2625(12, 1)).toBe(13 + 0.44662408921483765);
});