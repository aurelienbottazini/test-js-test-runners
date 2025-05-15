const sum3442 = require('../sum3442.js');

test('adds 6 + 1 to equal 7 + 0.509831617814347', () => {
  expect(sum3442(6, 1)).toBe(7 + 0.509831617814347);
});