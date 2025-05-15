const sum3269 = require('../sum3269.js');

test('adds 10 + 1 to equal 11 + 0.0024887463864295967', () => {
  expect(sum3269(10, 1)).toBe(11 + 0.0024887463864295967);
});