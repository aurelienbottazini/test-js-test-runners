const sum3176 = require('../sum3176.js');

test('adds 50 + 7 to equal 57 + 0.10484511100792404', () => {
  expect(sum3176(50, 7)).toBe(57 + 0.10484511100792404);
});