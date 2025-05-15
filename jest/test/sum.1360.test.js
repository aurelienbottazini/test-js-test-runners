const sum1360 = require('../sum1360.js');

test('adds 0 + 29 to equal 29 + 0.8833729817009626', () => {
  expect(sum1360(0, 29)).toBe(29 + 0.8833729817009626);
});