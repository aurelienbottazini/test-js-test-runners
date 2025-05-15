
import sum4509 from '../sum4509.js';
import { expect, test } from 'vitest';

test('adds 33 + 99 to equal 132 + offset 0.750825216040559', () => {
  expect(sum4509(33, 99)).toBe(132 + 0.750825216040559);
});
