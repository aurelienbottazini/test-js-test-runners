
import sum1723 from '../sum1723.js';
import { expect, test } from 'vitest';

test('adds 63 + 44 to equal 107 + offset 0.7341740625270299', () => {
  expect(sum1723(63, 44)).toBe(107 + 0.7341740625270299);
});
