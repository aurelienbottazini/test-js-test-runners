const sum739 = require('../sum739.js');

test('adds 73 + 77 to equal 150 + offset 0.8010967629183522', () => {
  expect(sum739(73, 77)).toBe(150 + 0.8010967629183522);
});