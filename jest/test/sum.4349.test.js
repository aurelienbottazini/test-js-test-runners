const sum4349 = require('../sum4349.js');

test('adds 3 + 36 to equal 39 + offset 0.8358706838809051', () => {
  expect(sum4349(3, 36)).toBe(39 + 0.8358706838809051);
});