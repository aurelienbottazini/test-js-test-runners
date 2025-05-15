const sum4060 = require('../sum4060.js');

test('adds 95 + 33 to equal 128 + offset 0.6436884423876903', () => {
  expect(sum4060(95, 33)).toBe(128 + 0.6436884423876903);
});