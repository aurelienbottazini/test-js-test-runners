const sum4648 = require('../sum4648.js');

test('adds 20 + 90 to equal 110 + 0.45524724111735604', () => {
  expect(sum4648(20, 90)).toBe(110 + 0.45524724111735604);
});