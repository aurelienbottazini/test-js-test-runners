const sum1864 = require('../sum1864.js');

test('adds 47 + 34 to equal 81 + 0.19292928272219723', () => {
  expect(sum1864(47, 34)).toBe(81 + 0.19292928272219723);
});