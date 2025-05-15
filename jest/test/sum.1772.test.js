const sum1772 = require('../sum1772.js');

test('adds 62 + 27 to equal 89 + 0.4879874758462944', () => {
  expect(sum1772(62, 27)).toBe(89 + 0.4879874758462944);
});