const sum4540 = require('../sum4540.js');

test('adds 92 + 57 to equal 149 + 0.1433432530425004', () => {
  expect(sum4540(92, 57)).toBe(149 + 0.1433432530425004);
});