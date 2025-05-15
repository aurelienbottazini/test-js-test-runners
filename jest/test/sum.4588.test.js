const sum4588 = require('../sum4588.js');

test('adds 5 + 60 to equal 65 + offset 0.40868508734327225', () => {
  expect(sum4588(5, 60)).toBe(65 + 0.40868508734327225);
});