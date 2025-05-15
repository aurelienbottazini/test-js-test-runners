const sum4115 = require('../sum4115.js');

test('adds 39 + 54 to equal 93 + 0.6951957165183564', () => {
  expect(sum4115(39, 54)).toBe(93 + 0.6951957165183564);
});