const sum787 = require('../sum787.js');

test('adds 6 + 18 to equal 24 + offset 0.5256325867976258', () => {
  expect(sum787(6, 18)).toBe(24 + 0.5256325867976258);
});