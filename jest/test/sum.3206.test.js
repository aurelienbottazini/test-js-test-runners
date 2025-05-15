const sum3206 = require('../sum3206.js');

test('adds 76 + 30 to equal 106 + offset 0.2063209700037123', () => {
  expect(sum3206(76, 30)).toBe(106 + 0.2063209700037123);
});