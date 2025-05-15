const sum230 = require('../sum230.js');

test('adds 22 + 81 to equal 103 + 0.8517730474269783', () => {
  expect(sum230(22, 81)).toBe(103 + 0.8517730474269783);
});