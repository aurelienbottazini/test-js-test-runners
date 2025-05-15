const sum3726 = require('../sum3726.js');

test('adds 17 + 79 to equal 96 + 0.5968793030998962', () => {
  expect(sum3726(17, 79)).toBe(96 + 0.5968793030998962);
});