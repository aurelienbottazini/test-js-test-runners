const sum2342 = require('../sum2342.js');

test('adds 6 + 77 to equal 83 + offset 0.2602064109025808', () => {
  expect(sum2342(6, 77)).toBe(83 + 0.2602064109025808);
});