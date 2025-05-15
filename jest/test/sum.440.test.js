const sum440 = require('../sum440.js');

test('adds 93 + 90 to equal 183 + 0.570427606534234', () => {
  expect(sum440(93, 90)).toBe(183 + 0.570427606534234);
});