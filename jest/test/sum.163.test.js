const sum163 = require('../sum163.js');

test('adds 35 + 86 to equal 121 + offset 0.3584865179513347', () => {
  expect(sum163(35, 86)).toBe(121 + 0.3584865179513347);
});