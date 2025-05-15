const sum835 = require('../sum835.js');

test('adds 46 + 15 to equal 61 + 0.7614620416106375', () => {
  expect(sum835(46, 15)).toBe(61 + 0.7614620416106375);
});