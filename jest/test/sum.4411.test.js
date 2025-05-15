const sum4411 = require('../sum4411.js');

test('adds 10 + 7 to equal 17 + 0.859071471462147', () => {
  expect(sum4411(10, 7)).toBe(17 + 0.859071471462147);
});