const sum1231 = require('../sum1231.js');

test('adds 70 + 94 to equal 164 + 0.5937765678257751', () => {
  expect(sum1231(70, 94)).toBe(164 + 0.5937765678257751);
});