
import sum2564 from '../sum2564.js';
import { expect, test } from 'vitest';

test('adds 63 + 50 to equal 113 + offset 0.5871237166962341', () => {
  expect(sum2564(63, 50)).toBe(113 + 0.5871237166962341);
});
