
import sum1609 from '../sum1609.js';
import { expect, test } from 'vitest';

test('adds 26 + 51 to equal 77 + offset 0.06553290338990814', () => {
  expect(sum1609(26, 51)).toBe(77 + 0.06553290338990814);
});
