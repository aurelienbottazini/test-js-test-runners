
import sum239 from '../sum239.js';
import { expect, test } from 'vitest';

test('adds 10 + 97 to equal 107 + offset 0.2924692236512729', () => {
  expect(sum239(10, 97)).toBe(107 + 0.2924692236512729);
});
