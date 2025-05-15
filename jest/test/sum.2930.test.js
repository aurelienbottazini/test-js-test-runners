const sum2930 = require('../sum2930.js');

test('adds 4 + 33 to equal 37 + offset 0.20622496981647853', () => {
  expect(sum2930(4, 33)).toBe(37 + 0.20622496981647853);
});