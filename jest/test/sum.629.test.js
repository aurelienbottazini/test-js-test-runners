const sum629 = require('../sum629.js');

test('adds 31 + 86 to equal 117 + offset 0.8305517860752399', () => {
  expect(sum629(31, 86)).toBe(117 + 0.8305517860752399);
});