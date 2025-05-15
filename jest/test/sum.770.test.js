const sum770 = require('../sum770.js');

test('adds 65 + 23 to equal 88 + 0.9584286666402234', () => {
  expect(sum770(65, 23)).toBe(88 + 0.9584286666402234);
});