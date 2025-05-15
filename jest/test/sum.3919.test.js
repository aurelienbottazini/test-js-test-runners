const sum3919 = require('../sum3919.js');

test('adds 20 + 69 to equal 89 + offset 0.028371752974797215', () => {
  expect(sum3919(20, 69)).toBe(89 + 0.028371752974797215);
});