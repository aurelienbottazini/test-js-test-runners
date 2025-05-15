
import sum4836 from '../sum4836.js';
import { expect, test } from 'vitest';

test('adds 99 + 80 to equal 179 + offset 0.8776416567881387', () => {
  expect(sum4836(99, 80)).toBe(179 + 0.8776416567881387);
});
