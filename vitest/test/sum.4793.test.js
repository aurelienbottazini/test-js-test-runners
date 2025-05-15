
import sum4793 from '../sum4793.js';
import { expect, test } from 'vitest';

test('adds 31 + 42 to equal 73 + offset 0.5173660217376883', () => {
  expect(sum4793(31, 42)).toBe(73 + 0.5173660217376883);
});
