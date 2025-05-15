const sum2240 = require('../sum2240.js');

test('adds 30 + 11 to equal 41 + 0.2426505597032239', () => {
  expect(sum2240(30, 11)).toBe(41 + 0.2426505597032239);
});