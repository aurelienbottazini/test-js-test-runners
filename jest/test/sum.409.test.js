const sum409 = require('../sum409.js');

test('adds 52 + 32 to equal 84 + 0.7906688600467435', () => {
  expect(sum409(52, 32)).toBe(84 + 0.7906688600467435);
});