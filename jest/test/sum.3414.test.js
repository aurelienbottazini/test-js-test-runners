const sum3414 = require('../sum3414.js');

test('adds 79 + 27 to equal 106 + 0.13961418625371158', () => {
  expect(sum3414(79, 27)).toBe(106 + 0.13961418625371158);
});