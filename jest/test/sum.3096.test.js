const sum3096 = require('../sum3096.js');

test('adds 20 + 15 to equal 35 + 0.30020658256180255', () => {
  expect(sum3096(20, 15)).toBe(35 + 0.30020658256180255);
});