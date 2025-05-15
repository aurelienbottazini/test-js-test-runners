const sum702 = require('../sum702.js');

test('adds 78 + 53 to equal 131 + 0.05724087920061893', () => {
  expect(sum702(78, 53)).toBe(131 + 0.05724087920061893);
});