const sum3312 = require('../sum3312.js');

test('adds 79 + 13 to equal 92 + 0.15522155557298034', () => {
  expect(sum3312(79, 13)).toBe(92 + 0.15522155557298034);
});