const sum651 = require('../sum651.js');

test('adds 17 + 46 to equal 63 + 0.8409639063185338', () => {
  expect(sum651(17, 46)).toBe(63 + 0.8409639063185338);
});