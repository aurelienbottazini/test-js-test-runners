const sum667 = require('../sum667.js');

test('adds 86 + 73 to equal 159 + 0.26915099001218823', () => {
  expect(sum667(86, 73)).toBe(159 + 0.26915099001218823);
});