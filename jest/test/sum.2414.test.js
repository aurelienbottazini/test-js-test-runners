const sum2414 = require('../sum2414.js');

test('adds 8 + 61 to equal 69 + 0.4124295572318102', () => {
  expect(sum2414(8, 61)).toBe(69 + 0.4124295572318102);
});