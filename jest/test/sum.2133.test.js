const sum2133 = require('../sum2133.js');

test('adds 79 + 65 to equal 144 + offset 0.4449331030199172', () => {
  expect(sum2133(79, 65)).toBe(144 + 0.4449331030199172);
});