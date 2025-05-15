const sum2192 = require('../sum2192.js');

test('adds 1 + 29 to equal 30 + offset 0.7150734654286034', () => {
  expect(sum2192(1, 29)).toBe(30 + 0.7150734654286034);
});