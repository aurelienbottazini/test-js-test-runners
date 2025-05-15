const sum374 = require('../sum374.js');

test('adds 48 + 45 to equal 93 + offset 0.3573575401957446', () => {
  expect(sum374(48, 45)).toBe(93 + 0.3573575401957446);
});