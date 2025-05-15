const sum3877 = require('../sum3877.js');

test('adds 81 + 78 to equal 159 + 0.20938553800672055', () => {
  expect(sum3877(81, 78)).toBe(159 + 0.20938553800672055);
});