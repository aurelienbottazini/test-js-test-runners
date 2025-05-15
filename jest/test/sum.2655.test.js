const sum2655 = require('../sum2655.js');

test('adds 75 + 88 to equal 163 + offset 0.3038801467499216', () => {
  expect(sum2655(75, 88)).toBe(163 + 0.3038801467499216);
});