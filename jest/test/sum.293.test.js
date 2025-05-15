const sum293 = require('../sum293.js');

test('adds 38 + 77 to equal 115 + 0.962764419873571', () => {
  expect(sum293(38, 77)).toBe(115 + 0.962764419873571);
});