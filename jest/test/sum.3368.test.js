const sum3368 = require('../sum3368.js');

test('adds 74 + 50 to equal 124 + 0.4606694336235235', () => {
  expect(sum3368(74, 50)).toBe(124 + 0.4606694336235235);
});