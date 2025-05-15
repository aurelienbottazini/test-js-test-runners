
import sum2471 from '../sum2471.js';
import { expect, test } from 'vitest';

test('adds 13 + 51 to equal 64 + offset 0.2450477609127656', () => {
  expect(sum2471(13, 51)).toBe(64 + 0.2450477609127656);
});
