
import sum3124 from '../sum3124.js';
import { expect, test } from 'vitest';

test('adds 24 + 85 to equal 109 + offset 0.7020385667381621', () => {
  expect(sum3124(24, 85)).toBe(109 + 0.7020385667381621);
});
