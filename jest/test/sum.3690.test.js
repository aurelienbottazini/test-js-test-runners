const sum3690 = require('../sum3690.js');

test('adds 11 + 75 to equal 86 + offset 0.7015633633525785', () => {
  expect(sum3690(11, 75)).toBe(86 + 0.7015633633525785);
});