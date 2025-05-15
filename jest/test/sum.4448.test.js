const sum4448 = require('../sum4448.js');

test('adds 50 + 21 to equal 71 + offset 0.3105782245721588', () => {
  expect(sum4448(50, 21)).toBe(71 + 0.3105782245721588);
});