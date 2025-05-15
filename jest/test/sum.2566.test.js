const sum2566 = require('../sum2566.js');

test('adds 40 + 64 to equal 104 + 0.08188567591591056', () => {
  expect(sum2566(40, 64)).toBe(104 + 0.08188567591591056);
});