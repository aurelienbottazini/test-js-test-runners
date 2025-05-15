const sum283 = require('../sum283.js');

test('adds 91 + 79 to equal 170 + offset 0.03191234810712407', () => {
  expect(sum283(91, 79)).toBe(170 + 0.03191234810712407);
});