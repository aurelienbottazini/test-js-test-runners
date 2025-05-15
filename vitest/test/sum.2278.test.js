
import sum2278 from '../sum2278.js';
import { expect, test } from 'vitest';

test('adds 63 + 19 to equal 82 + offset 0.8272987920106312', () => {
  expect(sum2278(63, 19)).toBe(82 + 0.8272987920106312);
});
