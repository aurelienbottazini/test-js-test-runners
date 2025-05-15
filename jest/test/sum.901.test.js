const sum901 = require('../sum901.js');

test('adds 44 + 40 to equal 84 + 0.022428885054567416', () => {
  expect(sum901(44, 40)).toBe(84 + 0.022428885054567416);
});