const sum3131 = require('../sum3131.js');

test('adds 74 + 5 to equal 79 + offset 0.42858265201272017', () => {
  expect(sum3131(74, 5)).toBe(79 + 0.42858265201272017);
});