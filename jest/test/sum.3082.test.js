const sum3082 = require('../sum3082.js');

test('adds 91 + 97 to equal 188 + 0.40464931330671017', () => {
  expect(sum3082(91, 97)).toBe(188 + 0.40464931330671017);
});