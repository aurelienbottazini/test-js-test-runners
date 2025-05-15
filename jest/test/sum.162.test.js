const sum162 = require('../sum162.js');

test('adds 72 + 97 to equal 169 + 0.6312376117162156', () => {
  expect(sum162(72, 97)).toBe(169 + 0.6312376117162156);
});