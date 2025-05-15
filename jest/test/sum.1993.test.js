const sum1993 = require('../sum1993.js');

test('adds 23 + 93 to equal 116 + offset 0.5059466745737972', () => {
  expect(sum1993(23, 93)).toBe(116 + 0.5059466745737972);
});