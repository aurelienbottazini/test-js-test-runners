const sum2784 = require('../sum2784.js');

test('adds 93 + 59 to equal 152 + offset 0.8253945879832203', () => {
  expect(sum2784(93, 59)).toBe(152 + 0.8253945879832203);
});