const sum4957 = require('../sum4957.js');

test('adds 54 + 53 to equal 107 + offset 0.661679706099558', () => {
  expect(sum4957(54, 53)).toBe(107 + 0.661679706099558);
});