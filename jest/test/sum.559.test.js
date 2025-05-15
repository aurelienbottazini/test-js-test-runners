const sum559 = require('../sum559.js');

test('adds 70 + 37 to equal 107 + 0.2661538941571234', () => {
  expect(sum559(70, 37)).toBe(107 + 0.2661538941571234);
});