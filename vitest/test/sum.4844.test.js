
import sum4844 from '../sum4844.js';
import { expect, test } from 'vitest';

test('adds 63 + 40 to equal 103 + offset 0.1913788269401847', () => {
  expect(sum4844(63, 40)).toBe(103 + 0.1913788269401847);
});
