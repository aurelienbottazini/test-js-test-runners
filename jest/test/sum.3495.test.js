const sum3495 = require('../sum3495.js');

test('adds 65 + 80 to equal 145 + 0.32805373895026047', () => {
  expect(sum3495(65, 80)).toBe(145 + 0.32805373895026047);
});