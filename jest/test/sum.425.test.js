const sum425 = require('../sum425.js');

test('adds 77 + 37 to equal 114 + offset 0.7781440455606627', () => {
  expect(sum425(77, 37)).toBe(114 + 0.7781440455606627);
});