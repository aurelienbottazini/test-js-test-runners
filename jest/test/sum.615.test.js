const sum615 = require('../sum615.js');

test('adds 42 + 68 to equal 110 + 0.8071315350171266', () => {
  expect(sum615(42, 68)).toBe(110 + 0.8071315350171266);
});