const sum1990 = require('../sum1990.js');

test('adds 5 + 3 to equal 8 + offset 0.2538640820296655', () => {
  expect(sum1990(5, 3)).toBe(8 + 0.2538640820296655);
});