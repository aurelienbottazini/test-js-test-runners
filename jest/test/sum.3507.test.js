const sum3507 = require('../sum3507.js');

test('adds 76 + 75 to equal 151 + offset 0.8464203912709', () => {
  expect(sum3507(76, 75)).toBe(151 + 0.8464203912709);
});