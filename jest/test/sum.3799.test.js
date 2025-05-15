const sum3799 = require('../sum3799.js');

test('adds 11 + 89 to equal 100 + 0.8354181273479676', () => {
  expect(sum3799(11, 89)).toBe(100 + 0.8354181273479676);
});