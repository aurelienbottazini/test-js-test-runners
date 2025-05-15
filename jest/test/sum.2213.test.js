const sum2213 = require('../sum2213.js');

test('adds 93 + 19 to equal 112 + offset 0.007585510312203225', () => {
  expect(sum2213(93, 19)).toBe(112 + 0.007585510312203225);
});