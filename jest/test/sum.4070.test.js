const sum4070 = require('../sum4070.js');

test('adds 49 + 96 to equal 145 + 0.8396877493390282', () => {
  expect(sum4070(49, 96)).toBe(145 + 0.8396877493390282);
});