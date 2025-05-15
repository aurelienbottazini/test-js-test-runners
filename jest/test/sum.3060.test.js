const sum3060 = require('../sum3060.js');

test('adds 29 + 98 to equal 127 + 0.06235262389131113', () => {
  expect(sum3060(29, 98)).toBe(127 + 0.06235262389131113);
});