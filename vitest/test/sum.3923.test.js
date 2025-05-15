
import sum3923 from '../sum3923.js';
import { expect, test } from 'vitest';

test('adds 63 + 92 to equal 155 + offset 0.2159787979447071', () => {
  expect(sum3923(63, 92)).toBe(155 + 0.2159787979447071);
});
