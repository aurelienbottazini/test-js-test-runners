const sum3913 = require('../sum3913.js');

test('adds 35 + 53 to equal 88 + offset 0.05848965822732366', () => {
  expect(sum3913(35, 53)).toBe(88 + 0.05848965822732366);
});