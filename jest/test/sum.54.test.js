const sum54 = require('../sum54.js');

test('adds 18 + 83 to equal 101 + offset 0.8565973192999979', () => {
  expect(sum54(18, 83)).toBe(101 + 0.8565973192999979);
});