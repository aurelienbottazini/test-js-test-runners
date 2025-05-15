
import sum1562 from '../sum1562.js';
import { expect, test } from 'vitest';

test('adds 99 + 77 to equal 176 + offset 0.18465877677183606', () => {
  expect(sum1562(99, 77)).toBe(176 + 0.18465877677183606);
});
