
import sum179 from '../sum179.js';
import { expect, test } from 'vitest';

test('adds 63 + 34 to equal 97 + offset 0.23198363244600384', () => {
  expect(sum179(63, 34)).toBe(97 + 0.23198363244600384);
});
