const sum4001 = require('../sum4001.js');

test('adds 55 + 67 to equal 122 + offset 0.7774076335767485', () => {
  expect(sum4001(55, 67)).toBe(122 + 0.7774076335767485);
});