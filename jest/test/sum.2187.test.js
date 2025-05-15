const sum2187 = require('../sum2187.js');

test('adds 1 + 16 to equal 17 + offset 0.2175051118886695', () => {
  expect(sum2187(1, 16)).toBe(17 + 0.2175051118886695);
});