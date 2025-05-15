const sum4016 = require('../sum4016.js');

test('adds 52 + 21 to equal 73 + 0.26943301601246694', () => {
  expect(sum4016(52, 21)).toBe(73 + 0.26943301601246694);
});