const sum550 = require('../sum550.js');

test('adds 80 + 20 to equal 100 + 0.3948367365796456', () => {
  expect(sum550(80, 20)).toBe(100 + 0.3948367365796456);
});