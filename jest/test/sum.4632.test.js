const sum4632 = require('../sum4632.js');

test('adds 48 + 45 to equal 93 + offset 0.8789185203463389', () => {
  expect(sum4632(48, 45)).toBe(93 + 0.8789185203463389);
});