const sum2886 = require('../sum2886.js');

test('adds 73 + 8 to equal 81 + 0.7154908328914463', () => {
  expect(sum2886(73, 8)).toBe(81 + 0.7154908328914463);
});