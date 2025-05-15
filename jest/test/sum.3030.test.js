const sum3030 = require('../sum3030.js');

test('adds 24 + 94 to equal 118 + offset 0.7288011858746958', () => {
  expect(sum3030(24, 94)).toBe(118 + 0.7288011858746958);
});