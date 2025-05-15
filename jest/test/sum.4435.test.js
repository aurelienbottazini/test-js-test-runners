const sum4435 = require('../sum4435.js');

test('adds 56 + 60 to equal 116 + 0.5757609122362018', () => {
  expect(sum4435(56, 60)).toBe(116 + 0.5757609122362018);
});