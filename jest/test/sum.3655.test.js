const sum3655 = require('../sum3655.js');

test('adds 38 + 56 to equal 94 + 0.6803882551755747', () => {
  expect(sum3655(38, 56)).toBe(94 + 0.6803882551755747);
});