const sum3244 = require('../sum3244.js');

test('adds 83 + 26 to equal 109 + 0.3209491701485906', () => {
  expect(sum3244(83, 26)).toBe(109 + 0.3209491701485906);
});