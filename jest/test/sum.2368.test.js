const sum2368 = require('../sum2368.js');

test('adds 50 + 44 to equal 94 + 0.771256829705542', () => {
  expect(sum2368(50, 44)).toBe(94 + 0.771256829705542);
});