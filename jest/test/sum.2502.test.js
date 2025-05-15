const sum2502 = require('../sum2502.js');

test('adds 65 + 9 to equal 74 + 0.3349921580308095', () => {
  expect(sum2502(65, 9)).toBe(74 + 0.3349921580308095);
});