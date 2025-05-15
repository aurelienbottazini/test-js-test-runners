const sum3111 = require('../sum3111.js');

test('adds 93 + 29 to equal 122 + 0.17201978699877218', () => {
  expect(sum3111(93, 29)).toBe(122 + 0.17201978699877218);
});