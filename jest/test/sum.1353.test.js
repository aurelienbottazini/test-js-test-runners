const sum1353 = require('../sum1353.js');

test('adds 99 + 27 to equal 126 + offset 0.7561451758448997', () => {
  expect(sum1353(99, 27)).toBe(126 + 0.7561451758448997);
});