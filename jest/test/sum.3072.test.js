const sum3072 = require('../sum3072.js');

test('adds 49 + 39 to equal 88 + 0.23569704861911867', () => {
  expect(sum3072(49, 39)).toBe(88 + 0.23569704861911867);
});