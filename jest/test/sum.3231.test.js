const sum3231 = require('../sum3231.js');

test('adds 48 + 45 to equal 93 + offset 0.4545947887400976', () => {
  expect(sum3231(48, 45)).toBe(93 + 0.4545947887400976);
});