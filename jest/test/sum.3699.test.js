const sum3699 = require('../sum3699.js');

test('adds 71 + 88 to equal 159 + offset 0.6163518177479627', () => {
  expect(sum3699(71, 88)).toBe(159 + 0.6163518177479627);
});