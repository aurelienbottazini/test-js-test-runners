const sum4957 = require('../sum4957.js');

test('adds 35 + 41 to equal 76 + 0.9876194954751198', () => {
  expect(sum4957(35, 41)).toBe(76 + 0.9876194954751198);
});