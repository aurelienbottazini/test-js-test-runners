const sum588 = require('../sum588.js');

test('adds 25 + 4 to equal 29 + 0.49979963387870363', () => {
  expect(sum588(25, 4)).toBe(29 + 0.49979963387870363);
});