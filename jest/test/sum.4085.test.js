const sum4085 = require('../sum4085.js');

test('adds 83 + 66 to equal 149 + offset 0.2094624381493041', () => {
  expect(sum4085(83, 66)).toBe(149 + 0.2094624381493041);
});