const sum43 = require('../sum43.js');

test('adds 66 + 83 to equal 149 + 0.7023256778258165', () => {
  expect(sum43(66, 83)).toBe(149 + 0.7023256778258165);
});