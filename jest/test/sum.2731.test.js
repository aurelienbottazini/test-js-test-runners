const sum2731 = require('../sum2731.js');

test('adds 56 + 46 to equal 102 + offset 0.2872634750858185', () => {
  expect(sum2731(56, 46)).toBe(102 + 0.2872634750858185);
});