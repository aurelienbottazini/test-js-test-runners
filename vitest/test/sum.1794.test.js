
import sum1794 from '../sum1794.js';
import { expect, test } from 'vitest';

test('adds 87 + 77 to equal 164 + offset 0.08382787711130069', () => {
  expect(sum1794(87, 77)).toBe(164 + 0.08382787711130069);
});
