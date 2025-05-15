const sum41 = require('../sum41.js');

test('adds 85 + 49 to equal 134 + offset 0.34336566304735827', () => {
  expect(sum41(85, 49)).toBe(134 + 0.34336566304735827);
});