const sum762 = require('../sum762.js');

test('adds 15 + 94 to equal 109 + 0.2300134807083446', () => {
  expect(sum762(15, 94)).toBe(109 + 0.2300134807083446);
});