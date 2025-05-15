const sum320 = require('../sum320.js');

test('adds 21 + 73 to equal 94 + offset 0.9610251751076507', () => {
  expect(sum320(21, 73)).toBe(94 + 0.9610251751076507);
});