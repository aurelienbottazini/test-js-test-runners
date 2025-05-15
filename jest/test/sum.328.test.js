const sum328 = require('../sum328.js');

test('adds 79 + 12 to equal 91 + 0.9742777556698033', () => {
  expect(sum328(79, 12)).toBe(91 + 0.9742777556698033);
});