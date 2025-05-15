const sum4098 = require('../sum4098.js');

test('adds 91 + 41 to equal 132 + offset 0.09137971175632786', () => {
  expect(sum4098(91, 41)).toBe(132 + 0.09137971175632786);
});