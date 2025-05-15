const sum3383 = require('../sum3383.js');

test('adds 37 + 88 to equal 125 + offset 0.9428795938944771', () => {
  expect(sum3383(37, 88)).toBe(125 + 0.9428795938944771);
});