const sum4197 = require('../sum4197.js');

test('adds 27 + 22 to equal 49 + offset 0.7875431428863827', () => {
  expect(sum4197(27, 22)).toBe(49 + 0.7875431428863827);
});