const sum4570 = require('../sum4570.js');

test('adds 39 + 25 to equal 64 + offset 0.5800189615340402', () => {
  expect(sum4570(39, 25)).toBe(64 + 0.5800189615340402);
});