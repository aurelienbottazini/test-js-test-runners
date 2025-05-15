const sum2852 = require('../sum2852.js');

test('adds 75 + 75 to equal 150 + 0.7288772730134215', () => {
  expect(sum2852(75, 75)).toBe(150 + 0.7288772730134215);
});