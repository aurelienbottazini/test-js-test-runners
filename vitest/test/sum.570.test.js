
import sum570 from '../sum570.js';
import { expect, test } from 'vitest';

test('adds 47 + 87 to equal 134 + offset 0.9895947406027945', () => {
  expect(sum570(47, 87)).toBe(134 + 0.9895947406027945);
});
