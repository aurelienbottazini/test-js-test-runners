const sum718 = require('../sum718.js');

test('adds 58 + 21 to equal 79 + offset 0.4476114294810526', () => {
  expect(sum718(58, 21)).toBe(79 + 0.4476114294810526);
});