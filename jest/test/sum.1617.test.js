const sum1617 = require('../sum1617.js');

test('adds 36 + 33 to equal 69 + offset 0.9730938615882362', () => {
  expect(sum1617(36, 33)).toBe(69 + 0.9730938615882362);
});