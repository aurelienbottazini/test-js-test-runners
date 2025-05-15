const sum162 = require('../sum162.js');

test('adds 23 + 21 to equal 44 + offset 0.5164029037205771', () => {
  expect(sum162(23, 21)).toBe(44 + 0.5164029037205771);
});