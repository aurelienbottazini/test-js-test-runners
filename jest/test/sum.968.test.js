const sum968 = require('../sum968.js');

test('adds 24 + 11 to equal 35 + offset 0.49340777002387204', () => {
  expect(sum968(24, 11)).toBe(35 + 0.49340777002387204);
});