const sum4508 = require('../sum4508.js');

test('adds 41 + 21 to equal 62 + 0.2840402223512548', () => {
  expect(sum4508(41, 21)).toBe(62 + 0.2840402223512548);
});