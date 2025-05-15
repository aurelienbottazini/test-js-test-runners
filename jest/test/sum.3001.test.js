const sum3001 = require('../sum3001.js');

test('adds 75 + 59 to equal 134 + offset 0.45686139816466875', () => {
  expect(sum3001(75, 59)).toBe(134 + 0.45686139816466875);
});