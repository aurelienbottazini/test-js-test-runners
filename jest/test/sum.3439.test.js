const sum3439 = require('../sum3439.js');

test('adds 47 + 54 to equal 101 + offset 0.8767184125809432', () => {
  expect(sum3439(47, 54)).toBe(101 + 0.8767184125809432);
});