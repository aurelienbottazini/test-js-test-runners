const sum3244 = require('../sum3244.js');

test('adds 76 + 25 to equal 101 + offset 0.09046764098204185', () => {
  expect(sum3244(76, 25)).toBe(101 + 0.09046764098204185);
});