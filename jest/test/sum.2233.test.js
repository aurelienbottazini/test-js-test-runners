const sum2233 = require('../sum2233.js');

test('adds 45 + 11 to equal 56 + 0.3984502596654801', () => {
  expect(sum2233(45, 11)).toBe(56 + 0.3984502596654801);
});