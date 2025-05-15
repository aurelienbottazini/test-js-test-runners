const sum2286 = require('../sum2286.js');

test('adds 31 + 29 to equal 60 + offset 0.9602576411483609', () => {
  expect(sum2286(31, 29)).toBe(60 + 0.9602576411483609);
});