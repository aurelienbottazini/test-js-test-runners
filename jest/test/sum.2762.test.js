const sum2762 = require('../sum2762.js');

test('adds 62 + 65 to equal 127 + 0.03273477448765039', () => {
  expect(sum2762(62, 65)).toBe(127 + 0.03273477448765039);
});