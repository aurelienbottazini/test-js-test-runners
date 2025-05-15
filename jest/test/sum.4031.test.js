const sum4031 = require('../sum4031.js');

test('adds 41 + 32 to equal 73 + offset 0.9150935220693033', () => {
  expect(sum4031(41, 32)).toBe(73 + 0.9150935220693033);
});