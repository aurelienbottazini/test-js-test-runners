const sum187 = require('../sum187.js');

test('adds 15 + 68 to equal 83 + 0.11112053187556947', () => {
  expect(sum187(15, 68)).toBe(83 + 0.11112053187556947);
});