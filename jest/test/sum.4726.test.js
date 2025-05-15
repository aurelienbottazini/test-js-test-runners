const sum4726 = require('../sum4726.js');

test('adds 93 + 25 to equal 118 + 0.6312615941991787', () => {
  expect(sum4726(93, 25)).toBe(118 + 0.6312615941991787);
});