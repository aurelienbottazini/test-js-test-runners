const sum622 = require('../sum622.js');

test('adds 12 + 12 to equal 24 + 0.18347325115564428', () => {
  expect(sum622(12, 12)).toBe(24 + 0.18347325115564428);
});