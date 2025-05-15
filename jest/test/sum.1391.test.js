const sum1391 = require('../sum1391.js');

test('adds 94 + 37 to equal 131 + 0.7639936725425522', () => {
  expect(sum1391(94, 37)).toBe(131 + 0.7639936725425522);
});