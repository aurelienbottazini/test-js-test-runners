const sum2092 = require('../sum2092.js');

test('adds 55 + 39 to equal 94 + offset 0.23482165673546485', () => {
  expect(sum2092(55, 39)).toBe(94 + 0.23482165673546485);
});