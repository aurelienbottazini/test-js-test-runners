const sum848 = require('../sum848.js');

test('adds 2 + 71 to equal 73 + offset 0.19172996362939287', () => {
  expect(sum848(2, 71)).toBe(73 + 0.19172996362939287);
});