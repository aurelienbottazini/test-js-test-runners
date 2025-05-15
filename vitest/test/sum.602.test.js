
import sum602 from '../sum602.js';
import { expect, test } from 'vitest';

test('adds 22 + 19 to equal 41 + offset 0.8860604658730888', () => {
  expect(sum602(22, 19)).toBe(41 + 0.8860604658730888);
});
