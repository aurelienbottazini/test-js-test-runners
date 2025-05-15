const sum2981 = require('../sum2981.js');

test('adds 74 + 65 to equal 139 + 0.5355224144806525', () => {
  expect(sum2981(74, 65)).toBe(139 + 0.5355224144806525);
});