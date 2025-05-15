const sum4231 = require('../sum4231.js');

test('adds 85 + 97 to equal 182 + 0.13831889652904683', () => {
  expect(sum4231(85, 97)).toBe(182 + 0.13831889652904683);
});