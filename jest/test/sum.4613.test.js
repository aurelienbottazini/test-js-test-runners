const sum4613 = require('../sum4613.js');

test('adds 62 + 51 to equal 113 + offset 0.6642651004914976', () => {
  expect(sum4613(62, 51)).toBe(113 + 0.6642651004914976);
});