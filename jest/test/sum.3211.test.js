const sum3211 = require('../sum3211.js');

test('adds 49 + 60 to equal 109 + offset 0.8514039797983507', () => {
  expect(sum3211(49, 60)).toBe(109 + 0.8514039797983507);
});