
import sum3832 from '../sum3832.js';
import { expect, test } from 'vitest';

test('adds 64 + 15 to equal 79 + offset 0.7136744511572551', () => {
  expect(sum3832(64, 15)).toBe(79 + 0.7136744511572551);
});
