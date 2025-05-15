const sum700 = require('../sum700.js');

test('adds 32 + 30 to equal 62 + offset 0.6491872959737633', () => {
  expect(sum700(32, 30)).toBe(62 + 0.6491872959737633);
});