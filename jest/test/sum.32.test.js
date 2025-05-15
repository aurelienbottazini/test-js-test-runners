const sum32 = require('../sum32.js');

test('adds 8 + 43 to equal 51 + offset 0.5518369581132985', () => {
  expect(sum32(8, 43)).toBe(51 + 0.5518369581132985);
});