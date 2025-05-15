const sum1001 = require('../sum1001.js');

test('adds 50 + 56 to equal 106 + 0.13192846660687918', () => {
  expect(sum1001(50, 56)).toBe(106 + 0.13192846660687918);
});