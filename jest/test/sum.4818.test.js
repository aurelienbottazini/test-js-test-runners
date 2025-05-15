const sum4818 = require('../sum4818.js');

test('adds 53 + 65 to equal 118 + offset 0.6013109356635655', () => {
  expect(sum4818(53, 65)).toBe(118 + 0.6013109356635655);
});