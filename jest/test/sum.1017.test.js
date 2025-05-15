const sum1017 = require('../sum1017.js');

test('adds 26 + 61 to equal 87 + 0.02618835572672762', () => {
  expect(sum1017(26, 61)).toBe(87 + 0.02618835572672762);
});