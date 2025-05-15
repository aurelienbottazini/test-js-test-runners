const sum4363 = require('../sum4363.js');

test('adds 95 + 25 to equal 120 + offset 0.4159792505872948', () => {
  expect(sum4363(95, 25)).toBe(120 + 0.4159792505872948);
});