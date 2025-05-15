const sum2531 = require('../sum2531.js');

test('adds 74 + 87 to equal 161 + 0.989043073377631', () => {
  expect(sum2531(74, 87)).toBe(161 + 0.989043073377631);
});