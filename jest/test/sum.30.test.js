const sum30 = require('../sum30.js');

test('adds 81 + 91 to equal 172 + 0.9357518953905722', () => {
  expect(sum30(81, 91)).toBe(172 + 0.9357518953905722);
});