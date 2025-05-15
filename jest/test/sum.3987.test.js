const sum3987 = require('../sum3987.js');

test('adds 21 + 54 to equal 75 + 0.10881050265115855', () => {
  expect(sum3987(21, 54)).toBe(75 + 0.10881050265115855);
});