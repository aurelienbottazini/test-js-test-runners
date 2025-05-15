const sum4916 = require('../sum4916.js');

test('adds 84 + 9 to equal 93 + 0.5286416153365463', () => {
  expect(sum4916(84, 9)).toBe(93 + 0.5286416153365463);
});