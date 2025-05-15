
import sum2838 from '../sum2838.js';
import { expect, test } from 'vitest';

test('adds 99 + 19 to equal 118 + offset 0.08747873852023325', () => {
  expect(sum2838(99, 19)).toBe(118 + 0.08747873852023325);
});
