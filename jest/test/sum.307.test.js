const sum307 = require('../sum307.js');

test('adds 36 + 3 to equal 39 + 0.1194199677293406', () => {
  expect(sum307(36, 3)).toBe(39 + 0.1194199677293406);
});