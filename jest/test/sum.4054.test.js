const sum4054 = require('../sum4054.js');

test('adds 74 + 13 to equal 87 + 0.004537178964870936', () => {
  expect(sum4054(74, 13)).toBe(87 + 0.004537178964870936);
});