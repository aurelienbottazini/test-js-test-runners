
import sum1748 from '../sum1748.js';
import { expect, test } from 'vitest';

test('adds 32 + 13 to equal 45 + offset 0.4377896791792293', () => {
  expect(sum1748(32, 13)).toBe(45 + 0.4377896791792293);
});
