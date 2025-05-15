const sum1539 = require('../sum1539.js');

test('adds 77 + 34 to equal 111 + 0.6183675595621038', () => {
  expect(sum1539(77, 34)).toBe(111 + 0.6183675595621038);
});