const sum2583 = require('../sum2583.js');

test('adds 79 + 96 to equal 175 + 0.917496663121077', () => {
  expect(sum2583(79, 96)).toBe(175 + 0.917496663121077);
});