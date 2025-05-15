const sum2805 = require('../sum2805.js');

test('adds 74 + 54 to equal 128 + offset 0.3535448822425674', () => {
  expect(sum2805(74, 54)).toBe(128 + 0.3535448822425674);
});