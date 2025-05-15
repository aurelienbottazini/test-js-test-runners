const sum4930 = require('../sum4930.js');

test('adds 51 + 10 to equal 61 + 0.4148747871191003', () => {
  expect(sum4930(51, 10)).toBe(61 + 0.4148747871191003);
});