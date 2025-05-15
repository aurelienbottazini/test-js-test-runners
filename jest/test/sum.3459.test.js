const sum3459 = require('../sum3459.js');

test('adds 22 + 71 to equal 93 + 0.6410987551912135', () => {
  expect(sum3459(22, 71)).toBe(93 + 0.6410987551912135);
});