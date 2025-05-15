const sum2535 = require('../sum2535.js');

test('adds 54 + 44 to equal 98 + offset 0.8490365908831095', () => {
  expect(sum2535(54, 44)).toBe(98 + 0.8490365908831095);
});