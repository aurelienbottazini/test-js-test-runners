const sum2020 = require('../sum2020.js');

test('adds 62 + 43 to equal 105 + 0.7293813774662974', () => {
  expect(sum2020(62, 43)).toBe(105 + 0.7293813774662974);
});