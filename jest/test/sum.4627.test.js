const sum4627 = require('../sum4627.js');

test('adds 36 + 1 to equal 37 + 0.6241075705612273', () => {
  expect(sum4627(36, 1)).toBe(37 + 0.6241075705612273);
});