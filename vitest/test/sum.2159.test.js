
import sum2159 from '../sum2159.js';
import { expect, test } from 'vitest';

test('adds 63 + 41 to equal 104 + offset 0.8640785327897076', () => {
  expect(sum2159(63, 41)).toBe(104 + 0.8640785327897076);
});
