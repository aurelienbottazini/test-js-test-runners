const sum144 = require('../sum144.js');

test('adds 17 + 16 to equal 33 + offset 0.6284234077339229', () => {
  expect(sum144(17, 16)).toBe(33 + 0.6284234077339229);
});