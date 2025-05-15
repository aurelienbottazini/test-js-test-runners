const sum317 = require('../sum317.js');

test('adds 54 + 57 to equal 111 + offset 0.3016318473941838', () => {
  expect(sum317(54, 57)).toBe(111 + 0.3016318473941838);
});