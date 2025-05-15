const sum2125 = require('../sum2125.js');

test('adds 65 + 87 to equal 152 + 0.3981703652216104', () => {
  expect(sum2125(65, 87)).toBe(152 + 0.3981703652216104);
});