const sum4393 = require('../sum4393.js');

test('adds 94 + 36 to equal 130 + offset 0.9398822030138965', () => {
  expect(sum4393(94, 36)).toBe(130 + 0.9398822030138965);
});