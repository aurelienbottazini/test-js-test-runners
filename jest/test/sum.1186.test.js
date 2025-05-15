const sum1186 = require('../sum1186.js');

test('adds 18 + 75 to equal 93 + offset 0.4479408994171492', () => {
  expect(sum1186(18, 75)).toBe(93 + 0.4479408994171492);
});