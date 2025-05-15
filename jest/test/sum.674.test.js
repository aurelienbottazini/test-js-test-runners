const sum674 = require('../sum674.js');

test('adds 87 + 4 to equal 91 + offset 0.3453610598415776', () => {
  expect(sum674(87, 4)).toBe(91 + 0.3453610598415776);
});