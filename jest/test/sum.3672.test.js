const sum3672 = require('../sum3672.js');

test('adds 62 + 57 to equal 119 + 0.6117134766111579', () => {
  expect(sum3672(62, 57)).toBe(119 + 0.6117134766111579);
});