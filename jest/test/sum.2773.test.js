const sum2773 = require('../sum2773.js');

test('adds 84 + 21 to equal 105 + offset 0.309469581971179', () => {
  expect(sum2773(84, 21)).toBe(105 + 0.309469581971179);
});