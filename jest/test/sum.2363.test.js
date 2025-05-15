const sum2363 = require('../sum2363.js');

test('adds 85 + 90 to equal 175 + offset 0.8030621937305656', () => {
  expect(sum2363(85, 90)).toBe(175 + 0.8030621937305656);
});