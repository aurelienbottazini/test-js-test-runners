const sum3006 = require('../sum3006.js');

test('adds 68 + 10 to equal 78 + 0.3581808702516266', () => {
  expect(sum3006(68, 10)).toBe(78 + 0.3581808702516266);
});