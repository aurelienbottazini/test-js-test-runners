const sum1857 = require('../sum1857.js');

test('adds 69 + 97 to equal 166 + 0.9456399350703023', () => {
  expect(sum1857(69, 97)).toBe(166 + 0.9456399350703023);
});