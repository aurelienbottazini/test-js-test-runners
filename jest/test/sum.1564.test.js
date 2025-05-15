const sum1564 = require('../sum1564.js');

test('adds 37 + 78 to equal 115 + 0.6256102367265735', () => {
  expect(sum1564(37, 78)).toBe(115 + 0.6256102367265735);
});