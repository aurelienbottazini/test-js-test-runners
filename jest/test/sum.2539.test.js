const sum2539 = require('../sum2539.js');

test('adds 22 + 78 to equal 100 + offset 0.2765148532335303', () => {
  expect(sum2539(22, 78)).toBe(100 + 0.2765148532335303);
});