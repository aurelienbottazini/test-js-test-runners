const sum2483 = require('../sum2483.js');

test('adds 62 + 74 to equal 136 + offset 0.3411915645293203', () => {
  expect(sum2483(62, 74)).toBe(136 + 0.3411915645293203);
});