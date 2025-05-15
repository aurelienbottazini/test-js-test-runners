const sum55 = require('../sum55.js');

test('adds 17 + 96 to equal 113 + offset 0.20353566723714234', () => {
  expect(sum55(17, 96)).toBe(113 + 0.20353566723714234);
});