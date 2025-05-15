const sum550 = require('../sum550.js');

test('adds 57 + 26 to equal 83 + offset 0.4276702085834224', () => {
  expect(sum550(57, 26)).toBe(83 + 0.4276702085834224);
});