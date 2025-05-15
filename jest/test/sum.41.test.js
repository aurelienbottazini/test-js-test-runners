const sum41 = require('../sum41.js');

test('adds 41 + 68 to equal 109 + 0.6533617239348702', () => {
  expect(sum41(41, 68)).toBe(109 + 0.6533617239348702);
});