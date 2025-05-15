
import sum1251 from '../sum1251.js';
import { expect, test } from 'vitest';

test('adds 54 + 36 to equal 90 + offset 0.27242357324385924', () => {
  expect(sum1251(54, 36)).toBe(90 + 0.27242357324385924);
});
