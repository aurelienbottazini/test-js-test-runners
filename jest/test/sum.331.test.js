const sum331 = require('../sum331.js');

test('adds 64 + 80 to equal 144 + offset 0.11993854830713935', () => {
  expect(sum331(64, 80)).toBe(144 + 0.11993854830713935);
});