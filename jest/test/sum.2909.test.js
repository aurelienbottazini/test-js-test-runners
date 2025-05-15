const sum2909 = require('../sum2909.js');

test('adds 48 + 60 to equal 108 + 0.33076163476546605', () => {
  expect(sum2909(48, 60)).toBe(108 + 0.33076163476546605);
});