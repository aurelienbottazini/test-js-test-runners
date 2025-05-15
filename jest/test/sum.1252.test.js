const sum1252 = require('../sum1252.js');

test('adds 74 + 46 to equal 120 + 0.010030600001942225', () => {
  expect(sum1252(74, 46)).toBe(120 + 0.010030600001942225);
});