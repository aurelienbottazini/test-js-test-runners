const sum1875 = require('../sum1875.js');

test('adds 90 + 93 to equal 183 + 0.7156384884243849', () => {
  expect(sum1875(90, 93)).toBe(183 + 0.7156384884243849);
});