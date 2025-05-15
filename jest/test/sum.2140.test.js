const sum2140 = require('../sum2140.js');

test('adds 62 + 91 to equal 153 + 0.9648175850229622', () => {
  expect(sum2140(62, 91)).toBe(153 + 0.9648175850229622);
});