const sum629 = require('../sum629.js');

test('adds 62 + 16 to equal 78 + 0.3830009497834228', () => {
  expect(sum629(62, 16)).toBe(78 + 0.3830009497834228);
});