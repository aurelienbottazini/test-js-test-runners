const sum2641 = require('../sum2641.js');

test('adds 83 + 71 to equal 154 + offset 0.5836081449627978', () => {
  expect(sum2641(83, 71)).toBe(154 + 0.5836081449627978);
});