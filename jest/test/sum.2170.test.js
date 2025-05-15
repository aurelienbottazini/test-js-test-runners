const sum2170 = require('../sum2170.js');

test('adds 21 + 53 to equal 74 + 0.21844476834356785', () => {
  expect(sum2170(21, 53)).toBe(74 + 0.21844476834356785);
});