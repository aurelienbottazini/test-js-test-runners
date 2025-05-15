const sum4209 = require('../sum4209.js');

test('adds 70 + 73 to equal 143 + 0.09214855401959476', () => {
  expect(sum4209(70, 73)).toBe(143 + 0.09214855401959476);
});