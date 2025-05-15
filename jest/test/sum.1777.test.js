const sum1777 = require('../sum1777.js');

test('adds 90 + 22 to equal 112 + 0.09737787014042887', () => {
  expect(sum1777(90, 22)).toBe(112 + 0.09737787014042887);
});