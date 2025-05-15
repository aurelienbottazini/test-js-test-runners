const sum3643 = require('../sum3643.js');

test('adds 32 + 8 to equal 40 + offset 0.2918099223874324', () => {
  expect(sum3643(32, 8)).toBe(40 + 0.2918099223874324);
});