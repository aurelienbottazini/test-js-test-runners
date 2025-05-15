const sum4829 = require('../sum4829.js');

test('adds 48 + 73 to equal 121 + 0.2411874512419474', () => {
  expect(sum4829(48, 73)).toBe(121 + 0.2411874512419474);
});