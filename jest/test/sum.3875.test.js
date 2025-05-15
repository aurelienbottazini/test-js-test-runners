const sum3875 = require('../sum3875.js');

test('adds 77 + 2 to equal 79 + 0.4856571837634862', () => {
  expect(sum3875(77, 2)).toBe(79 + 0.4856571837634862);
});