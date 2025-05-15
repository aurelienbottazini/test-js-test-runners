const sum3282 = require('../sum3282.js');

test('adds 52 + 39 to equal 91 + 0.2130884921230104', () => {
  expect(sum3282(52, 39)).toBe(91 + 0.2130884921230104);
});