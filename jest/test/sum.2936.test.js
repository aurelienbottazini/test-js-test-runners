const sum2936 = require('../sum2936.js');

test('adds 59 + 22 to equal 81 + offset 0.3190441113529475', () => {
  expect(sum2936(59, 22)).toBe(81 + 0.3190441113529475);
});