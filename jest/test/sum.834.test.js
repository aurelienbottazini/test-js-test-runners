const sum834 = require('../sum834.js');

test('adds 43 + 22 to equal 65 + offset 0.3837328145531296', () => {
  expect(sum834(43, 22)).toBe(65 + 0.3837328145531296);
});