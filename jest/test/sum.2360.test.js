const sum2360 = require('../sum2360.js');

test('adds 93 + 9 to equal 102 + offset 0.7563890471768827', () => {
  expect(sum2360(93, 9)).toBe(102 + 0.7563890471768827);
});