const sum416 = require('../sum416.js');

test('adds 96 + 82 to equal 178 + offset 0.4843631233446062', () => {
  expect(sum416(96, 82)).toBe(178 + 0.4843631233446062);
});