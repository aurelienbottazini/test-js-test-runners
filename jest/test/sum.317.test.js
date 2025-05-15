const sum317 = require('../sum317.js');

test('adds 13 + 49 to equal 62 + 0.5122822366283004', () => {
  expect(sum317(13, 49)).toBe(62 + 0.5122822366283004);
});