const sum2874 = require('../sum2874.js');

test('adds 43 + 31 to equal 74 + offset 0.169045934559497', () => {
  expect(sum2874(43, 31)).toBe(74 + 0.169045934559497);
});