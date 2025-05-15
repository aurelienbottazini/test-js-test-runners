const sum1973 = require('../sum1973.js');

test('adds 79 + 66 to equal 145 + offset 0.9399525608661706', () => {
  expect(sum1973(79, 66)).toBe(145 + 0.9399525608661706);
});