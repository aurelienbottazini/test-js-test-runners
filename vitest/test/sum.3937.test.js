
import sum3937 from '../sum3937.js';
import { expect, test } from 'vitest';

test('adds 90 + 98 to equal 188 + offset 0.08183109764884966', () => {
  expect(sum3937(90, 98)).toBe(188 + 0.08183109764884966);
});
