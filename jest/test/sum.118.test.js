const sum118 = require('../sum118.js');

test('adds 27 + 71 to equal 98 + 0.4056126582263183', () => {
  expect(sum118(27, 71)).toBe(98 + 0.4056126582263183);
});