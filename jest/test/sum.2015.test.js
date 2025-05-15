const sum2015 = require('../sum2015.js');

test('adds 90 + 99 to equal 189 + offset 0.5153731832805115', () => {
  expect(sum2015(90, 99)).toBe(189 + 0.5153731832805115);
});