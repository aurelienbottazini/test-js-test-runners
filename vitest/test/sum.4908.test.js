
import sum4908 from '../sum4908.js';
import { expect, test } from 'vitest';

test('adds 59 + 43 to equal 102 + offset 0.3994216396979857', () => {
  expect(sum4908(59, 43)).toBe(102 + 0.3994216396979857);
});
