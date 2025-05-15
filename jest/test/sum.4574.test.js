const sum4574 = require('../sum4574.js');

test('adds 78 + 22 to equal 100 + offset 0.4220590129700056', () => {
  expect(sum4574(78, 22)).toBe(100 + 0.4220590129700056);
});