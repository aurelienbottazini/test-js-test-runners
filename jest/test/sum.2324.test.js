const sum2324 = require('../sum2324.js');

test('adds 74 + 44 to equal 118 + 0.388005457394502', () => {
  expect(sum2324(74, 44)).toBe(118 + 0.388005457394502);
});