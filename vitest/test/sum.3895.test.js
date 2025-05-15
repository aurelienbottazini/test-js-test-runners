
import sum3895 from '../sum3895.js';
import { expect, test } from 'vitest';

test('adds 13 + 3 to equal 16 + offset 0.19315637416228026', () => {
  expect(sum3895(13, 3)).toBe(16 + 0.19315637416228026);
});
