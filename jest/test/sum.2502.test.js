const sum2502 = require('../sum2502.js');

test('adds 67 + 57 to equal 124 + offset 0.4613435634631906', () => {
  expect(sum2502(67, 57)).toBe(124 + 0.4613435634631906);
});