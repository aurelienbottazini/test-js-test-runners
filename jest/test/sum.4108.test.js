const sum4108 = require('../sum4108.js');

test('adds 56 + 9 to equal 65 + offset 0.14763291300753623', () => {
  expect(sum4108(56, 9)).toBe(65 + 0.14763291300753623);
});