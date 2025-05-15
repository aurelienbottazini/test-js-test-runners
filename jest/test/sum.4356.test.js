const sum4356 = require('../sum4356.js');

test('adds 35 + 3 to equal 38 + 0.1816468820635584', () => {
  expect(sum4356(35, 3)).toBe(38 + 0.1816468820635584);
});