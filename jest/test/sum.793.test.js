const sum793 = require('../sum793.js');

test('adds 3 + 40 to equal 43 + offset 0.9705962646189933', () => {
  expect(sum793(3, 40)).toBe(43 + 0.9705962646189933);
});