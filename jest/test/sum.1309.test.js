const sum1309 = require('../sum1309.js');

test('adds 2 + 28 to equal 30 + offset 0.896386821837169', () => {
  expect(sum1309(2, 28)).toBe(30 + 0.896386821837169);
});