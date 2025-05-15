const sum744 = require('../sum744.js');

test('adds 98 + 32 to equal 130 + offset 0.29032932453689475', () => {
  expect(sum744(98, 32)).toBe(130 + 0.29032932453689475);
});