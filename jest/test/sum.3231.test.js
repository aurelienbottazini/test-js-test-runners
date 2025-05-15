const sum3231 = require('../sum3231.js');

test('adds 97 + 40 to equal 137 + 0.9746157398989745', () => {
  expect(sum3231(97, 40)).toBe(137 + 0.9746157398989745);
});