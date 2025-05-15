const sum1005 = require('../sum1005.js');

test('adds 31 + 60 to equal 91 + 0.3333171151416705', () => {
  expect(sum1005(31, 60)).toBe(91 + 0.3333171151416705);
});