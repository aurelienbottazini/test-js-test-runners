const sum71 = require('../sum71.js');

test('adds 31 + 40 to equal 71 + 0.03664794520905379', () => {
  expect(sum71(31, 40)).toBe(71 + 0.03664794520905379);
});