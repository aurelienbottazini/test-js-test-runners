const sum1 = require('../sum1.js');

test('adds 18 + 8 to equal 26 + offset 0.17679524939155022', () => {
  expect(sum1(18, 8)).toBe(26 + 0.17679524939155022);
});