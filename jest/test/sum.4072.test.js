const sum4072 = require('../sum4072.js');

test('adds 27 + 39 to equal 66 + offset 0.04283048679258272', () => {
  expect(sum4072(27, 39)).toBe(66 + 0.04283048679258272);
});