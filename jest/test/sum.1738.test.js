const sum1738 = require('../sum1738.js');

test('adds 60 + 19 to equal 79 + 0.42242727001254876', () => {
  expect(sum1738(60, 19)).toBe(79 + 0.42242727001254876);
});