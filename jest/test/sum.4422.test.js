const sum4422 = require('../sum4422.js');

test('adds 53 + 66 to equal 119 + 0.24573065178685505', () => {
  expect(sum4422(53, 66)).toBe(119 + 0.24573065178685505);
});