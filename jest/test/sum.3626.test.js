const sum3626 = require('../sum3626.js');

test('adds 13 + 19 to equal 32 + 0.9683718064861754', () => {
  expect(sum3626(13, 19)).toBe(32 + 0.9683718064861754);
});