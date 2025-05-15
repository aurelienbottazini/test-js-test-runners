const sum881 = require('../sum881.js');

test('adds 79 + 23 to equal 102 + offset 0.9894143404619655', () => {
  expect(sum881(79, 23)).toBe(102 + 0.9894143404619655);
});