
import sum2643 from '../sum2643.js';
import { expect, test } from 'vitest';

test('adds 56 + 9 to equal 65 + offset 0.5713465234425499', () => {
  expect(sum2643(56, 9)).toBe(65 + 0.5713465234425499);
});
