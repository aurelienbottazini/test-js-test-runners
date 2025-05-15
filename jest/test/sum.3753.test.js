const sum3753 = require('../sum3753.js');

test('adds 67 + 26 to equal 93 + offset 0.006786100278206808', () => {
  expect(sum3753(67, 26)).toBe(93 + 0.006786100278206808);
});