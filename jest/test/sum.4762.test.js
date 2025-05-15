const sum4762 = require('../sum4762.js');

test('adds 62 + 59 to equal 121 + 0.646142078883248', () => {
  expect(sum4762(62, 59)).toBe(121 + 0.646142078883248);
});