const sum902 = require('../sum902.js');

test('adds 40 + 68 to equal 108 + offset 0.0869761548775051', () => {
  expect(sum902(40, 68)).toBe(108 + 0.0869761548775051);
});