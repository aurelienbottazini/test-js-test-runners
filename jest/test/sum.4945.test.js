const sum4945 = require('../sum4945.js');

test('adds 31 + 8 to equal 39 + 0.1797816052531097', () => {
  expect(sum4945(31, 8)).toBe(39 + 0.1797816052531097);
});