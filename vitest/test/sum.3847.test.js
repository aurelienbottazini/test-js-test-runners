
import sum3847 from '../sum3847.js';
import { expect, test } from 'vitest';

test('adds 68 + 14 to equal 82 + offset 0.21919723713565997', () => {
  expect(sum3847(68, 14)).toBe(82 + 0.21919723713565997);
});
