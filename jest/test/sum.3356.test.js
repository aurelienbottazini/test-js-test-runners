const sum3356 = require('../sum3356.js');

test('adds 76 + 59 to equal 135 + offset 0.24913053421134668', () => {
  expect(sum3356(76, 59)).toBe(135 + 0.24913053421134668);
});