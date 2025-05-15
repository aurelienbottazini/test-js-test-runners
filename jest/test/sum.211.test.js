const sum211 = require('../sum211.js');

test('adds 38 + 14 to equal 52 + 0.2816560341319462', () => {
  expect(sum211(38, 14)).toBe(52 + 0.2816560341319462);
});