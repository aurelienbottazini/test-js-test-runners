const sum4468 = require('../sum4468.js');

test('adds 88 + 38 to equal 126 + 0.08922333604309529', () => {
  expect(sum4468(88, 38)).toBe(126 + 0.08922333604309529);
});