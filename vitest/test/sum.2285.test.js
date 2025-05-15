
import sum2285 from '../sum2285.js';
import { expect, test } from 'vitest';

test('adds 22 + 45 to equal 67 + offset 0.4691666601394411', () => {
  expect(sum2285(22, 45)).toBe(67 + 0.4691666601394411);
});
