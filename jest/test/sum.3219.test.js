const sum3219 = require('../sum3219.js');

test('adds 70 + 1 to equal 71 + offset 0.9610967942786478', () => {
  expect(sum3219(70, 1)).toBe(71 + 0.9610967942786478);
});